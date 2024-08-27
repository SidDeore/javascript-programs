console.log("======= 1. Add 10 into each element of array =========");
const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given Array= ${arrayNumbers}`);
let newArray = arrayNumbers.map((element)=>{
    return element+10;
})
console.log(`Transform array: ${newArray}`);

console.log("======= 2. Cube of each element of array =========");
console.log(`Given Array= ${arrayNumbers}`);
let cubeArray = arrayNumbers.map((element)=>{
    return element*element*element;
})
console.log(`Transform array: ${cubeArray}`);

console.log("======= 3. add indexed value into its corresponding each array element =========");
console.log(`Given Array= ${arrayNumbers}`);
let indexedArray = arrayNumbers.map((element, index)=>{
    return element+index;
})
console.log(`Transform array: ${indexedArray}`);