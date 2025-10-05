let user = {
    firstName: "first",
    lastName: "Last",
};

Object.defineProperty(user, "fullName", {
    get(){
        return this.firstName + " "+ this.lastName;
    },

    set(value){
        [this.firstName, this.lastName] = value.split(" ");
    },
});

user.fullName = "Amin Sedghi";

alert(user.fullName);
