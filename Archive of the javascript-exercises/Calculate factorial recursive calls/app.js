function factorial(n){

    //if (n == 1){return 1;} else return n * factorial(n - 1);
    return n == 1 ? 1 : n * factorial(n - 1);
}

alert(factorial(5));