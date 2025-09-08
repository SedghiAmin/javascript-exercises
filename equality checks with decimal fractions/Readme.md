This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

That’s because i would never equal 10.

Run it to see the real values of i:

None of them is exactly 10.

Such things happen because of the precision losses when adding fractions like 0.2.

Conclusion: evade equality checks when working with decimal fractions.
