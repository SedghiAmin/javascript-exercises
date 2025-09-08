function func(){
    let num;

    do {
        num = prompt("please enter a number please: ", 0);

    } while ( !isFinite(num) );

    if (num == "") return null;
    
    return num;
}

alert(`we read your number: ${func()}`);