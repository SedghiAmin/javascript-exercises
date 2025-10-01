let caseSentence = prompt("please enter your note:", "your note");

function chk(cs){
    let sen = cs.toLowerCase();
    if (sen.includes("sex") || sen.includes("porn")){
        return "your note isn't accepte";
    }
    else return "your note is OK";
}

alert( chk(caseSentence));