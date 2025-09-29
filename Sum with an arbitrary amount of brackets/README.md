# Sum with an arbitrary amount of brackets

Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Hint: you may need to setup custom object to primitive conversion for your function.

# solution
For the whole thing to work anyhow, the result of sum must be function.
That function must keep in memory the current value between calls.
According to the task, the function must become the number when used in ==. Functions are objects, so the conversion happens as described in the chapter Object to primitive conversion, and we can provide our own method that returns the number.