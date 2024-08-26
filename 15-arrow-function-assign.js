console.log("======= statement log in arrow function =========");
let printsms = () => console.log("Good Morning, Today is Monday");
printsms();

console.log("======= Arrow function 3 agrument no return- Multiplication =========");
let multiply = (n1, n2, n3=1) =>{
    console.log(`Given arguments: ${n1}, ${n2}, ${n3}`);
    console.log(`Multiplication= ${n1*n2*n3}`);
}
multiply(5, 5, 2);
console.log("======= Multiplication with default value =========");
multiply(10, 4); 

console.log("======= Arrow function 5 agrument with return- Addition =========");
let addition = (n1, n2, n3, n4, n5) =>{
    console.log(`Given arguments: ${n1}, ${n2}, ${n3}, ${n4}, ${n5}`);
    let result = n1+n2+n3+n4+n5;
    return result;
}
let res1= addition(100, 100, 200, 349, 756);
console.log(`Addition: ${res1}`);

console.log("======= Arrow function 5 agrument with return- Concat String =========");
let res2= addition('I am', ' learning', ' ES6', ' features', ' in depth.');
console.log(`Concat String : ${res2}`);