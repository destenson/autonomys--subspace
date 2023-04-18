//! Subspace proof of space implementation based on Chia
#![cfg_attr(not(feature = "std"), no_std)]
#![warn(rust_2018_idioms, missing_debug_implementations, missing_docs)]
#![feature(const_trait_impl)]

#[cfg(feature = "std")]
pub mod chia;
#[cfg(feature = "shim")]
pub mod shim;

use subspace_core_primitives::{PosProof, PosQualityBytes, PosSeed};

/// Abstraction that represents quality of the solution in the table
pub trait Quality {
    /// Get underlying bytes representation of the quality
    fn to_bytes(&self) -> PosQualityBytes;

    /// Create proof for this solution
    fn create_proof(&self) -> PosProof;
}

/// Proof of space kind
pub trait Table: Send + Sync {
    /// Abstraction that represents quality of the solution in the table
    type Quality<'a>: Quality
    where
        Self: 'a;

    /// Generate new table with 32 bytes seed
    fn generate(seed: &PosSeed) -> Self;

    /// Try to find quality of the proof at `challenge_index` if proof exists
    fn find_quality(&self, challenge_index: u32) -> Option<Self::Quality<'_>>;

    /// Check whether proof created earlier is valid and return quality bytes if yes
    fn is_proof_valid(
        seed: &PosSeed,
        challenge_index: u32,
        proof: &PosProof,
    ) -> Option<PosQualityBytes>;
}
