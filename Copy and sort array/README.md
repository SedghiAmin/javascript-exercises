# Copy and sort array

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

```javascript
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
```