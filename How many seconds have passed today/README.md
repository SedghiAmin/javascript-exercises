# How many seconds have passed today?

Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

``` javascript
getSecondsToday() == 36000 // (3600 * 10)
```

The function should work in any day. That is, it should not have a hard-coded value of “today”.

# solution
To get the number of seconds, we can generate a date using the current day and time 00:00:00, then substract it from “now”.

The difference is the number of milliseconds from the beginning of the day, that we should divide by 1000 to get seconds.