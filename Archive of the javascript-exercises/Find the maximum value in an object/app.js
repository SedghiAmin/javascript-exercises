 function topSalary(salaries) {

    let maxSalery = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)){
        if(salary > maxSalery){
            maxSalery = salary;
            maxName = name;
        }
    }

    let obj = Object.fromEntries(
        [
            ["maxName", maxName], ["maxSalery", maxSalery]
        ]
    );

    return obj;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let {maxName , maxSalery} = topSalary(salaries);

alert(`Max salery belongs to ${maxName} by ${maxSalery} dollers`); 

