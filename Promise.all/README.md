# Promise.all

Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.