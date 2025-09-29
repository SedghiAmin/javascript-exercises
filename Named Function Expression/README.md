#Named Function Expression

Named Function Expression, or NFE, is a term for Function Expressions that have a name.

For instance, let’s take an ordinary Function Expression:

```javascript
let sayHi = function(who) {
  alert(`Hello, ${who}`);
};
```
And add a name to it:

```javascript
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
```

# solution
First let’s note, that we still have a Function Expression. Adding the name "func" after function did not make it a Function Declaration, because it is still created as a part of an assignment expression.

Adding such a name also did not break anything.

The function is still available as sayHi():

```javascript
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

sayHi("John"); // Hello, John
```
There are two special things about the name func, that are the reasons for it:

It allows the function to reference itself internally.
It is not visible outside of the function.