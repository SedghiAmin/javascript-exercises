let army = {

    minAge : 18,
    maxAge : 22,
    isValid(person) {
        return person.age >= this.minAge && person.age <= this.maxAge ? true : false;
    },
}

let persons = [
    {age:15, name: "Amin"},
    {age:16, name: "Benjamin"},
    {age:17, name: "Davood"},
    {age:18, name: "Elahe"},
    {age:19, name: "Faramarz"},
    {age:20, name: "Ghasem"},
    {age:22, name: "Hamin"},
    {age:23, name: "Iman"},
    {age:24, name: "Jamshid"},
    {age:25, name: "Kaveh"},
];

let resault = persons.filter(person => army.isValid(person));

for(let i=0; i < resault.length; i++){

    alert(resault[i].name + ' have '+ resault[i].age + ' and accepted.');
    
}
