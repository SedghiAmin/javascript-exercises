function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

/* alert( unique(strings) ); // Hare, Krishna, :-O */
for (let item of unique(strings)){
  alert(item);
}
