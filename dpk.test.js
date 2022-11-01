const { deterministicPartitionKey, createDigest } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns 'part1' when event.partitionKey is 'part1'", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 'part1' });
    expect(trivialKey).toBe("part1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Rehash when the partitionKey is exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const longKey = 'part1'.repeat(100);
    const trivialKey = deterministicPartitionKey({ partitionKey: longKey });
    expect(trivialKey).toBe(createDigest(longKey));
  });
});

describe("deterministicPartitionKey", () => {
  it("The returned partitionKey is of type string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 123 });
    expect(trivialKey).toBe("123");
  });
});