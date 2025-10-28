let dictionary = Object.create(null, {
  toString: { // define toString property
    value() { // the value is a function
      return Object.keys(this).join();
    }
  }
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test";  //__proto__ is a regular property key here

// apple and __proto__ is in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
alert(dictionary); // "apple,__proto__"