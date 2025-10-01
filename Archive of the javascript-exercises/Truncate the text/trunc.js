let note = prompt("please enter your note: ", "your note!");
let maxLen = 20;

function truncate(note, maxLen){
    let len = note.length;
    
    if (len > maxLen){
        return note.slice(0 , maxLen - 1) + " ...";
    } else return note;
}

alert (truncate(note, maxLen));