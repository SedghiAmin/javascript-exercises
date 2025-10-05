let user = {
    firstName: "first",
    lastName: "Last",
};

Object.defineProperty(user, "fullName", {
    get(){
        return this._firstName + " "+ this._lastName;
    },

    set(value){
        //if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:
        let arr = value.split(" ");
        if(arr[0].length < 5){
            alert("Name is too short...");
            return;
        }
        [this._firstName, this._lastName] = value.split(" ");
    },
});

user.fullName = "Amin Sedghi";

alert(user.fullName);

user.name = ""; // Name is too short...