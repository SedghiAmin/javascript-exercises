function unique(arr) {
    let output = new Set();

    for(let item of arr){
        /* if(!output.includes(item)){
            output.push(item);
        } */
      output.add(item);
    }

  return output;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

/* alert( unique(strings) ); // Hare, Krishna, :-O */
for (let item of unique(strings)){
  alert(item);
}
