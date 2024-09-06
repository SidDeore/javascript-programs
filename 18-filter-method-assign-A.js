console.log(`======== 1. Find out all the numbers which are greater than 50 =========`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array: ${arrayNumbers}`);
const newArray1 = arrayNumbers.filter((element) => {
    return element > 50;
})
console.log(`transform Array: ${newArray1}`);

console.log(`======== 2. Find out all the even number =========`);
console.log(`Given array: ${arrayNumbers}`);
const newArray2 = arrayNumbers.filter((element) => {
    return element%2==0;
})
console.log(`transform Array: ${newArray2}`);

console.log(`======== 3. Find out all the odd number =========`);
console.log(`Given array: ${arrayNumbers}`);
const newArray3 = arrayNumbers.filter((element) => {
    return element%2==1;
})
console.log(`transform Array: ${newArray3}`);

console.log(`======== 4. Find out all the numbers which are multiple of 5 =========`);
console.log(`Given array: ${arrayNumbers}`);
const newArray4 = arrayNumbers.filter((element) => {
    return element%5==0;
})
console.log(`transform Array: ${newArray4}`);

console.log(`======== 5. Find out all numbers which are between 20 and 50 =========`);
console.log(`Given array: ${arrayNumbers}`);
const newArray5 = arrayNumbers.filter((element) => {
    return element >20 && element <50;
})
console.log(`transform Array: ${newArray5}`);

