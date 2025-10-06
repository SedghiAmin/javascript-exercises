let obj = {
  0: "Hello",
  1: "world!",
  application: "test",
  length: 3,
};

obj.__proto__ = Array.prototype;

alert(obj.join(', ')); //It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. 