class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    };
}

function readUser(json){
    let user = JSON.parse(json);
    if (!user.age){
        throw new ValidationError("age field not found in json");
    }
    if (!user.name){
        throw new ValidationError("name field not found in json");
    }
}

let user = '{"age": 25}';

try{
    readUser(user);
}catch(err){
    if (err instanceof ValidationError){
        alert("Invalid data: " + err.message);
    }else if (err instanceof SyntaxError){
        alert("Syntax Error: "+ err.message);
    }else {
    throw err; // unknown error, rethrow it (caused by a typo in the code or other unknown reasons)
  }

}finally{
    alert("finally ...");
}