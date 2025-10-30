# Promisification
“Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.
Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.

For instance, we have loadScript(src, callback) from the chapter Introduction: callbacks.

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})
```

A call to promisify(f) returns a wrapper around f. That wrapper returns a promise and forwards the call to the original f, tracking the result in the custom callback.

Here, promisify assumes that the original function expects a callback with exactly two arguments (err, result). That’s what we encounter most often. Then our custom callback is in exactly the right format, and promisify works great for such a case.

resolve is called with only one or all arguments depending on whether manyArgs is truthy.

For more exotic callback formats, like those without err at all: callback(result), we can promisify such functions manually without using the helper.

# usage:
```javascript
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);
```