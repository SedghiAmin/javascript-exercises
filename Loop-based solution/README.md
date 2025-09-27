we have a single-linked list :

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```

Write a function printList(list) that outputs list items one-by-one.

# Solution
We make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?

Technically, the loop is more effective. These two variants do the same, but the loop does not spend resources for nested function calls.

From the other side, the recursive variant is shorter and sometimes easier to understand.

