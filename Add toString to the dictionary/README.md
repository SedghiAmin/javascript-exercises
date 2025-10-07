# Add toString to the dictionary
There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

We want to adding a method dictionary.toString() into it, that should return a comma-delimited list of keys. Our toString should not show up in for..in over the object.

# Solution
The method can take all enumerable keys using Object.keys and output their list.

To make toString non-enumerable, let’s define it using a property descriptor. The syntax of Object.create allows us to provide an object with property descriptors as the second argument.