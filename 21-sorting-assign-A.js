console.log("======== Assignment Sorting of Array ========");
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array: ${arrayRollNumbers}`);

console.log("======== 1. Reverse the array ========");
let arrayRev = arrayRollNumbers.reverse();
console.log(`Reverse Array: ${arrayRev}`);

console.log("======== 2. Use the sort() method as it is without any custom sorting logic & notice the issue ========");
let sortArray = arrayRollNumbers.sort();
console.log(`After Sorting Array: ${sortArray}`);

console.log("======== 3. Sort the array in ascending order, by writing your custom logic ========");
let ascSortArray = arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(`New Array= ${ascSortArray}`);

console.log("======== 4. Find the Greatest number from the array ========");
let GreaterNo = arrayRollNumbers.sort((n1, n2)=>{
    return n1<n2 ? 1 : -1;
});
console.log(`Greatest No= ${GreaterNo[0]}`);

console.log("======== 5. Find the smallest number from the array ========");
let smallerNo = arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(`Smallest No= ${smallerNo[0]}`);

console.log("======== 6. Remove duplicates from array ========");
let duplicateArray = [];
for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index]
    if (duplicateArray.indexOf(element) == -1) {
        duplicateArray.push(element);   
    }
}
console.log(duplicateArray);