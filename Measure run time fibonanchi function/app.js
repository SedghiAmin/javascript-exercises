function fibo(n){

    if (n < 0 || Math.trunc(n) != n){
        throw new Error("invalid number");
    };

    if (n > 1)
        return fibo(n - 1) + fibo(n - 2);
    else return 1;
}

let n = prompt("pleas enter a positive number?", 34);

let start = Date.now();

let result, dif;

try{
    result = fibo(n);
}catch(err){
    alert(err);
    result = 0;
}finally{
    dif = Date.now() - start;
}

alert(result || "Error occured ...");

alert(`execution took: ${dif}ms`);