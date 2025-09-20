function unique(arr) {
    let output = [];

    for(let item of arr){
        if(!output.includes(item)){
            output.push(item);
        }
    }

  return output;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
