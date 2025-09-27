# Recursive traversals
Imagine, we have a company. The staff structure can be presented as an object:

```javascript
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};
```

In other words, a company has departments.

A department may have an array of staff. For instance, sales department has 2 employees: John and Alice.

Or a department may split into subdepartments, like development has two branches: sites and internals. Each of them has their own staff.

As we can see, when our function gets a department to sum, there are two possible cases:

Either it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.
Or it’s an object with N subdepartments – then we can make N recursive calls to get the sum for each of the subdeps and combine the results.
The 1st case is the base of recursion, the trivial case, when we get an array.

The 2nd case when we get an object is the recursive step. A complex task is split into subtasks for smaller departments. They may in turn split again, but sooner or later the split will finish at 1.