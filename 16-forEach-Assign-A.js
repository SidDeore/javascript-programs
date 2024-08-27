console.log("======= All elements of array with index using forEach ==========");
const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`Given Array= ${arrayNumbers}`);
arrayNumbers.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

console.log("======= Find the Positive numbers using forEach ==========");
console.log(`Given Array: ${arrayNumbers}`);
arrayNumbers.forEach((element) => {
    if (element>0) {
        console.log(element);  
    }
});

console.log("======= Find the Neative numbers using forEach into the new array ==========");
console.log(`Given Array: ${arrayNumbers}`);
const negNoArray = [];
arrayNumbers.forEach((element) => {
    if (element<0) {
        negNoArray.push(element);  
    }
});
negNoArray.forEach(element => {
    console.log(element);
});

console.log("======= Find the Even numbers using forEach ==========");
console.log(`Given Array: ${arrayNumbers}`);
arrayNumbers.forEach((element) => {
    if (element%2==0) {
        console.log(element);
    }
});

console.log("======= Find the sum of all array element using forEach ==========");
console.log(`Given Array: ${arrayNumbers}`);
let sumOfArrayEle = 0;
arrayNumbers.forEach((element) => {
        sumOfArrayEle = sumOfArrayEle + element;
});
console.log(`Sum of all Array element: ${sumOfArrayEle}`);

console.log("======= Even indexed array value using forEach ==========");
console.log(`Given Array: ${arrayNumbers}`);
console.log(`Even indexed value elements: `);
arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        console.log(element);
    }
});