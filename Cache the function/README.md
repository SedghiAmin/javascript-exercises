# Transparent caching
Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.

If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.

But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.

# To summarize, there are several benefits of using a separate cachingDecorator instead of altering the code of slow itself:

- The cachingDecorator is reusable. We can apply it to another function.
- The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
- We can combine multiple decorators if needed (other decorators will follow).