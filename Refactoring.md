# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First, a helper function is defined to calculate the digest of a string as the same logic is repeated multiple times.

Second, the logic of calculating the partition key is clarified:
1. If the event has a partition key, we use that. If the key is too long, we use its digest as the partition key.
2. If the event does not have partition key, we use the digest of the event as the partition key.
3. If no event is given, the trivial partition key is returned.

In any case, the returned partition key is a string type.