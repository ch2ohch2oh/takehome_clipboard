const crypto = require("crypto");

function createDigest(data, algo = "sha3-512") {
  return crypto.createHash(algo).update(data).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  // Update candidate if there is nontrivial partition key
  if (event) {
    candidate = event.partitionKey || createDigest(JSON.stringify(event));
  }

  // Rehash if candidate too long
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createDigest(candidate);
  }

  // Make sure a string is returned
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  return candidate
};

exports.createDigest = createDigest;
