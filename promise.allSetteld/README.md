# Promise.allSettled
Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed.

Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.
