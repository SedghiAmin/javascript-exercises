let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
};

user.say("Hello"); // Hello, John! ("Hello" argument is passed to say)
user.say("Bye"); // Bye, John! ("Bye" is passed to say)