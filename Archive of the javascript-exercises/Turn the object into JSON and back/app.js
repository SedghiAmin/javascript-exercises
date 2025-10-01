let user = {
  name: "John Smith",
  age: 35
};



let json = JSON.stringify(user);

let obj = JSON.parse(json);

alert(typeof(json)); //string

alert(typeof(obj)); //object

alert(obj.name);    //John Smith