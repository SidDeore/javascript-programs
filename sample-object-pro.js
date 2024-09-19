console.log("========= pro 01: List of properties of object ===========");
var student = {
    name : "Sid",
    clas : "X",
    rollNo : 14
}
let properties = Object.keys(student)
console.log(properties);

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

console.log("========= pro 06. How to get the last item of JavaScript object ===========");
console.log('i). Using Object.keys() Method');
var car = {
    make : "Toyota",
    model : "Carmy",
    year : 2020,
    color : "blue"
}
let keys = Object.keys(car);
let lastKey = keys[keys.length-1];
console.log(`Last item of object= '${lastKey} : ${car[lastKey]}'`);

console.log('ii). Using Object.entries() Method');
var car = {
    make : "Toyota",
    model : "Carmy",
    year : 2020,
    color : "blue"
}
let entries = Object.entries(car);
let lastEntry = entries[entries.length-1];
console.log(`Last Item of Onject = '${lastEntry[0]} : ${lastEntry[1]}'`);

console.log("========= pro 08. How to add an object to an array in JavaScript ===========");
var fruits = ['apple', 'banana', 'orange'];
var newFruit = {
    name : 'grape',
    color : 'purple'
};
fruits.push(newFruit);
console.log('Add an object to array', ...fruits);

console.log("========= pro 09. How to remove duplicates from an array of objects using JavaScript ===========");
var student = [
    {id: 1, name: 'Sid'},
    {id: 2, name: 'vishal'},
    {id: 1, name: 'Sid'},
    {id: 3, name: 'Adi'},
    {id: 2, name: 'vishal'}
]
function removeArrayObjectDuplicate(arr) {
    return arr.filter((student, index, self)=>
        index == self.findIndex((t)=>(
        t.id == student.id && t.name == student.name
        ))
    );
}
var result = removeArrayObjectDuplicate(student);
console.table(result);

console.log("========= pro 10. How to get a subset of a javascript object's properties ===========");
var person = {
    firstName : 'Sid',
    lastName : 'Deore',
    age : 23,
    city : 'Pune',
    country : 'India'
}
var {firstName, lastName} = person;
console.log(firstName, lastName);

console.log("========= pro 11. How to convert an Object {} to an Array [] of key-value pairs in JavaScript ===========");
console.log('======== Method 01- Using Object.entries() ===========');
const obj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
}
const entries1 = Object.entries(obj);
console.table(entries1);

console.log('======== Method 02- Using Object.keys() ===========');
const obj1 = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
}
const entries2 = Object.keys(obj).map(key => [key, obj[key]]);
console.log(entries2);

console.log("========= pro 12. How to check if a value is object-like in JavaScript ===========");
function isObjectLike(value) {
    console.log(`Given input: ${value}`);
    return typeof value == 'object' && value != null;
}
console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(isObjectLike('string'));

console.log("========= pro 13. How to use a variable for a key in a JavaScript object literal ===========");
let key = 'name';
let value = 'John Doe';
let obj3 = {
    [key] : value
}
console.log(obj3);
