//! HTTP server which fetches objects from the DSN based on a hash, using a mapping indexer service.

use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Deserializer, Serialize};
use serde_json::Value;
use std::default::Default;
use std::sync::Arc;
use subspace_core_primitives::hashes::{blake3_hash, Blake3Hash};
use subspace_core_primitives::pieces::PieceIndex;
use subspace_core_primitives::BlockNumber;
use subspace_data_retrieval::object_fetcher::ObjectFetcher;
use subspace_data_retrieval::piece_getter::PieceGetter;
use tracing::{debug, error, trace};

/// Parameters for the DSN object HTTP server.
pub(crate) struct ServerParameters<PG>
where
    PG: PieceGetter + Send + Sync + 'static,
{
    pub(crate) object_fetcher: ObjectFetcher<PG>,
    pub(crate) indexer_endpoint: String,
    pub(crate) http_endpoint: String,
}

/// Object mapping format from the indexer service.
#[derive(Serialize, Deserialize, Debug, Default)]
#[serde(rename_all = "camelCase")]
struct ObjectMapping {
    hash: Blake3Hash,
    piece_index: PieceIndex,
    piece_offset: u32,
    // TODO: when the HTTP server starts sending integers, remove this custom function
    #[serde(deserialize_with = "string_or_int_to_u32")]
    block_number: BlockNumber,
}

/// Utility function to deserialize a JSON string or integer into a u32.
fn string_or_int_to_u32<'de, D>(deserializer: D) -> Result<u32, D::Error>
where
    D: Deserializer<'de>,
{
    let v: serde_json::Value = Deserialize::deserialize(deserializer)?;

    match v {
        Value::String(s) => s.parse::<u32>().map_err(serde::de::Error::custom),
        Value::Number(n) => {
            if let Some(n) = n.as_u64() {
                if n <= u32::MAX as u64 {
                    return Ok(n as u32);
                }
            }

            Err(serde::de::Error::custom("block_number is not a u32"))
        }
        _ => Err(serde::de::Error::custom(
            "block_number is not a Number or String",
        )),
    }
}

/// Requests an object mapping with `hash` from the indexer service.
async fn request_object_mapping(endpoint: &str, hash: Blake3Hash) -> anyhow::Result<ObjectMapping> {
    let client = reqwest::Client::new();
    let object_mappings_url = format!("{}/objects/{}", endpoint, hex::encode(hash));

    debug!(?hash, ?object_mappings_url, "Requesting object mapping...");

    let response = client
        .get(&object_mappings_url)
        .send()
        .await?
        .json::<ObjectMapping>()
        .await;
    match &response {
        Ok(json) => {
            trace!(?hash, ?json, "Received object mapping");
        }
        Err(err) => {
            error!(?hash, ?err, ?object_mappings_url, "Request failed");
        }
    }

    response.map_err(|err| err.into())
}

/// Fetches a DSN object with `hash`, using the mapping indexer service.
async fn serve_object<PG>(
    hash: web::Path<Blake3Hash>,
    additional_data: web::Data<Arc<ServerParameters<PG>>>,
) -> impl Responder
where
    PG: PieceGetter + Send + Sync + 'static,
{
    let server_params = additional_data.into_inner();
    let hash = hash.into_inner();

    let Ok(object_mapping) = request_object_mapping(&server_params.indexer_endpoint, hash).await
    else {
        return HttpResponse::BadRequest().finish();
    };

    if object_mapping.hash != hash {
        error!(
            ?object_mapping,
            ?hash,
            "Returned object mapping doesn't match requested hash"
        );
        return HttpResponse::ServiceUnavailable().finish();
    }

    let object_fetcher_result = server_params
        .object_fetcher
        .fetch_object(object_mapping.piece_index, object_mapping.piece_offset)
        .await;

    let object = match object_fetcher_result {
        Ok(object) => {
            trace!(?hash, size = %object.len(), "Object fetched successfully");

            let data_hash = blake3_hash(&object);
            if data_hash != hash {
                error!(
                    ?data_hash,
                    data_size = %object.len(),
                    ?hash,
                    "Retrieved data doesn't match requested mapping hash"
                );
                trace!(data = %hex::encode(object), "Retrieved data");
                return HttpResponse::ServiceUnavailable().finish();
            }

            object
        }
        Err(err) => {
            error!(?hash, ?err, "Failed to fetch object");
            return HttpResponse::ServiceUnavailable().finish();
        }
    };

    HttpResponse::Ok()
        .content_type("application/octet-stream")
        .body(object)
}

/// Starts the DSN object HTTP server.
pub async fn start_server<PG>(server_params: ServerParameters<PG>) -> std::io::Result<()>
where
    PG: PieceGetter + Send + Sync + 'static,
{
    let server_params = Arc::new(server_params);
    let http_endpoint = server_params.http_endpoint.clone();
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(server_params.clone()))
            .route("/data/{hash}", web::get().to(serve_object::<PG>))
    })
    .bind(http_endpoint)?
    .run()
    .await
}
