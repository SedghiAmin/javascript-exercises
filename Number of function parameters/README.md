# The “length” property
There is another built-in property “length” that returns the number of function parameters.

The length property is sometimes used for introspection in functions that operate on other functions.
We write a function that accepts a "question" to ask and an arbitrary number of "handler" functions to call.

# Solution
Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:

A zero-argument function, which is only called when the user gives a positive answer.
A function with arguments, which is called in either case and returns an answer.

To call handler the right way, we examine the handler.length property.

The idea is that we have a simple, no-arguments handler syntax for positive cases (most frequent variant), but are able to support universal handlers as well

This is a particular case of so-called polymorphism – treating arguments differently depending on their type or, in our case depending on the length. 