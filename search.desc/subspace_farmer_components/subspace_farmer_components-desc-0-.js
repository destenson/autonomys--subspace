searchState.loadedDescShard("subspace_farmer_components", 0, "Components of the reference implementation of Subspace …\nAsync variant\nContainer or asynchronously reading bytes using in …\nInformation about the protocol necessary for farmer …\nEnum to encapsulate the selection between <code>ReadAtSync</code> and […\nAsync version of <code>ReadAt</code>, it is neither <code>Send</code> nor <code>Sync</code> and …\nReader with fixed offset added to all attempted reads\nSync version of <code>ReadAt</code>, it is both <code>Send</code> and <code>Sync</code> and is …\nSync variant\nAuditing utilities\nFile extension trait\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstantiate <code>ReadAt</code> from some <code>ReadAtAsync</code> implementation\nInstantiate <code>ReadAt</code> from some <code>ReadAtSync</code> implementation\nSize of the blockchain history\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtract inner value\nHow many pieces one sector is supposed to contain (max)\nMinimum lifetime of a plotted sector, measured in archived …\nGet implementation of <code>ReadAtSync</code> that add specified offset …\nGet implementation of <code>ReadAtAsync</code> that add specified …\nPlotting utilities\nUtilities for turning solution candidates (from auditing) …\nFill the buffer by reading bytes at a specific offset\nFill the buffer by reading bytes at a specific offset and …\nReading utilities\nFraction of pieces from the “recent history” (…\nNumber of latest archived segments that are considered “…\nSector-related data structures\nResult of sector audit\nErrors that happen during proving\nFailed read s-bucket\nAudit the whole plot and generate streams of results.\nAudit a single sector and generate a stream of solutions.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSector index\nSolution candidates\nLow-level error\nS-bucket audit index\nSector index\nExtension convenience trait that allows pre-allocating …\nExtension convenience trait that allows setting some file …\nAdvise OS/file system that file will use random access and …\nAdvise OS/file system that file will use random access and …\nAdvise OS/file system that file will use sequential access …\nAdvise OS/file system that file will use sequential access …\nDisable cache on macOS\nMake sure file has specified number of bytes allocated for …\nRead exact number of bytes at a specific offset\nGet file size\nUse Direct I/O on Linux and disable buffering on Windows.\nWrite all provided bytes at a specific offset\nAbort early\nBad sector output size\nCPU implementation of <code>RecordsEncoder</code>\nOptions for sector downloading\nOpaque sector downloading result and ready for writing\nOptions for encoding a sector.\nMostly opaque sector encoding result ready for writing\nFailed to retrieve piece\nCan’t recover missing piece\nOptions for plotting a sector.\nInformation about sector that was plotted\nPlotting status\nRecords encoder for plotting purposes\nRecords encoder error\nWhether encoding should be aborted early\nWhether encoding should be aborted early\nDownload sector for plotting.\nSemaphore for part of the plotting when farmer downloads …\nEncode provided sector records\nEncode downloaded sector.\nSemaphore for part of the plotting when farmer encodes …\nErasure coding instance\nErasure coding instance\nFarmer protocol info\nFarmer protocol info\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nKZG instance\nKZG instance\nCreate new instance\nGetter for pieces of archival history\nGetter for pieces of archival history\nIndexes of pieces that were plotted\nHow many pieces should sector contain\nHow many pieces should sector contain\nPlot a single sector.\nInformation about sector that was plotted\nPublic key corresponding to sector\nPublic key corresponding to sector\nProof of space table generators\nRecords encoding instance\nSector ID\nSector index\nSector index\nSector index\nSector index\nSector metadata\nWhere plotted sector should be written, vector must either …\nWrite encoded sector into sector output\nLower-level error\nLower-level error\nLower-level error\nExpected size\nPiece index\nActual size\nFailed to create chunk witness\nFailed to create polynomial for record\nFailed to decode sector contents map\nInvalid erasure coding instance\nI/O error occurred\nSolutions that can be proven if necessary.\nErrors that happen during proving\nRecord reading error\nContainer for solution candidates.\nBest solution distance found, <code>None</code> in case there are no …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTurn solution candidates into actual solutions\nReturns true if no candidates inside\nWhether this error is fatal and makes farm unusable\nTotal number of candidates\nChunk index\nLower-level error\nLower-level error\nPiece offset\nPiece offset\nChecksum mismatch\nRead individual chunks (<code>ScalarBytes::FULL_BYTES</code> in size) …\nFailed to decode sector contents map\nFailed to erasure-decode record\nFailed to read chunk.\nInvalid chunk, possible disk corruption\nI/O error occurred\nMissing proof of space proof.\nDefines a mode of reading chunks in …\nErrors that happen during reading\nRead the whole sector at once and extract chunks from …\nWrong record size after decoding\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this error is fatal and renders farm unusable\nRead piece from sector.\nRead sector record chunks, only plotted s-buckets are …\nGiven sector record chunks recover extended record chunks …\nGiven sector record chunks recover source record chunks in …\nActual size in bytes\nChunk location\nChunk location\nIndicates whether chunk was encoded\nLow-level error\nLower-level error\nLower-level error\nExpected size in bytes\nPiece offset\nS-bucket\nS-bucket\nChecksum mismatch\nWrapper data structure that allows to iterate mutably over …\nInvalid bytes length\nInvalid bytes length\nInvalid number of encoded record chunks\nS-bucket provided is out of range\nMap of sector contents.\nError happening when trying to encode <code>SectorContentsMap</code> …\nError happening when trying to create <code>SectorContentsMap</code> …\nError happening when trying to create <code>SectorContentsMap</code> …\nMetadata of the plotted sector\nSame as <code>SectorMetadata</code>, but with checksums verified during …\nEncode internal contents into <code>output</code>\nSize of encoded checksummed sector metadata.\nSize of sector contents map when encoded and stored in the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReconstruct sector contents map from bytes.\nSize of the blockchain history at time of sector creation\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProduces an iterator over encoded chunks bitfields.\nProduces a mutable iterator over encoded chunks bitfields.\nIterate over individual record bitfields\nIterate mutably over individual record bitfields\nCreates an iterator of …\nIterate over chunks of s-bucket indicating if encoded …\nCreates an iterator of <code>(piece_offset, encoded_chunk_used)</code>, …\nCreate new sector contents map initialized with zeroes to …\nNumber of encoded chunks in each record\nCreates an iterator of …\nNumber of pieces stored in this sector\nReturns offsets of each s-bucket relatively to the …\nReturns sizes of each s-bucket\nS-bucket sizes in a sector\nSector index\nSize of the part of the plot containing record chunks …\nSize of the part of the plot containing record metadata.\nExact sector plot size (sector contents map, record …\nActual length\nExpected length\nActual length\nActual number of encoded record chunks\nExpected length\nMax supported\nMax s-bucket\nProvided s-bucket")