let str = prompt("please enter a sentense: ", "test word!");

function ucFirst(target){
    if (!target){
        return null;
    } 
    return target[0].toUpperCase() + target.slice(1);
}

alert(ucFirst(str));

// we can use this function but this is too long !!!

/* function ucFirst(target){
    let len = target.length;
    let output = "";

    for (let i = 0; i < len - 1; i++){
        if (i == 0){
            output += target[i].toUpperCase();
        }else output += target[i];
    }

    return output;
} */

