console.log("========= pro 01: List of properties of object ===========");
var student = {
    name : "Sid",
    clas : "X",
    rollNo : 14
}
let properties = Object.keys(student)
console.log(properties);
console.table(student);

console.log("========= pro 02: Delete one property of properties of object ===========");
var student = {
    name : "Sid",
    clas : "X",
    rollNo : 14
}
console.log(`Before Delete:`);
console.log(student);
delete student.rollNo;
console.log(`After Delete:`);
console.log(student);

console.log("========= pro 03: program to get the length of a JavaScript object. ===========");
var car = {
    make : "Toyota",
    model : "Camry",
    year : 2019,
    color : "White"
}
console.log(`Legth of object: ${Object.keys(car).length}`);

console.log("========= pro 04: How to get dynamic access to an object property in JavaScript ===========");
var person = {
    name : "Vishal do",
    age : 24,
    profession : "Director"
}
var propertyName = 'age';
console.log(`Dynamic access to an object property- age: ${person[propertyName]}`);

console.log("========= pro 05: How to modify an objects property in an array of objects in JavaScript ===========");
var employee = [
    {
    id : 1,
    name : "Tommy ton",
    salary : 50000,
    position : "React Developer"
    }
];
function modifySaraly(id, newSalary) {
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].id == id) {
            employee[i].salary = newSalary
            return;
        }
    }
}
modifySaraly(1, 60000);
console.table(employee);