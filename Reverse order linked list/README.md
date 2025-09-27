# Output a single-linked list in the reverse order

Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.

# solution

Using a recursion:
The recursive logic is a little bit tricky here.

We need to first output the rest of the list and then output the current one

Using a loop:
The loop variant is also a little bit more complicated than the direct output.

There is no way to get the last value in our list. We also can’t “go back”.

So what we can do is to first go through the items in the direct order and remember them in an array, and then output what we remembered in the reverse order
