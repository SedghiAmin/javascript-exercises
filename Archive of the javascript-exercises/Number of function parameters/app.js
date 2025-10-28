function ask(qustion, ...handelers){
    let isOk = confirm(qustion);

    for (let handler of handelers){
        if (handler.length == 0) {
            if (isOk) handler();
        }else handler(isOk);
    }
}

ask("OK / Cancel ?", () => alert("you clicked on 'OK' button"), result => alert(result));