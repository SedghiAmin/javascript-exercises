class User{
    constructor(value){
        this.name = value;
    };

    get name(){
        return this._name;
    };

    set name(value){
        this._name = value;
    };

};

let user = new User("Amin");

alert(user.name);