function aclean(arr){

    let output = new Map();

    for (let item of arr){
        let letterSorted = item.toLowerCase().split('').sort().join('');
        output.set(letterSorted, item);
    }

    return Array.from(output.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

/*
map.set(sorted, word);
If we ever meet a word the same letter-sorted form again, then it would overwrite the previous value with the same key in the map. So we’ll always have at maximum one word per letter-form.
*/