# Add toString to the dictionary
There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

We want to adding a method dictionary.toString() into it, that should return a comma-delimited list of keys. Our toString should not show up in for..in over the object.

# Solution
The method can take all enumerable keys using Object.keys and output their list.

To make toString non-enumerable, let’s define it using a property descriptor. The syntax of Object.create allows us to provide an object with property descriptors as the second argument.

we can just switch to using Map for storage instead of plain objects, then everything’s fine:

```javascript
let map = new Map();

let key = prompt("What's the key?", "__proto__");
map.set(key, "some value");

alert(map.get(key)); // "some value" (as intended)
```

…But Object syntax is often more appealing, as it’s more concise.

Fortunately, we can use objects, because language creators gave thought to that problem long ago.

As we know, __proto__ is not a property of an object, but an accessor property of Object.prototype

So, if obj.__proto__ is read or set, the corresponding getter/setter is called from its prototype, and it gets/sets [[Prototype]].

As it was said in the beginning of this tutorial section: __proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself.