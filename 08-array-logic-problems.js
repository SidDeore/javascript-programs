console.log("========= probelm No. 01. Javascript program to print the number of an element present in array. =========");
let array1 = [1, 2, 3, 4, 5, 6];
function arrayLenght(arr1){
    console.log(`Number of element in Array: ${arr1.length}`);    
}
console.log(`Given Array: ${array1}`);
arrayLenght(array1);

console.log("========= probelm No. 02. Javascript program to print the sum of all the items of the array. =========");
let array2 = [1, 2, 3, 4, 5, 6];
let sum = 0;
function arraySum(arr2){
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i]
    }
    console.log(`Sum of all elements in array is: ${sum}`);
    
}
console.log(`Given Array: ${array2}`);
arraySum(array2)

console.log("========= probelm No. 03. Javascript program to right rotate the element of an array. =========");
let array3 = [1, 2, 3, 4, 5, 6];
function rotateRightArray(arr3) {
    let rotate = arr3.pop();
    arr3.unshift(rotate);
    return arr3;
}
console.log(`Given Array: ${array3}`);
let res1 = rotateRightArray(array3)
console.log(`Array after roate Right: ${res1}`);

console.log("========= probelm No. 04. Javascript program to sort the elements of an array in ascending order. =========");
let array4 = [4, 8, 5, 3, 2, 7, 1, 9, 3];
function ascArray(arr4) {
    let arraySort1 = arr4.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    return arraySort1;
}
console.log(`Given Array: ${array4}`);
let res2 = ascArray(array4)
console.log(`Ascending order Array: ${res2}`);

console.log("========= probelm No. 05. Javascript program to sort the element of an array in descending order. =========");
let array5 = [4, 8, 5, 3, 2, 7, 1, 9, 3];
function descArray(arr5){
    let arraySort2 = arr5.sort((n1, n2)=>{
        return n1 < n2 ? 1 : -1;
    });
    return arraySort2;
}
console.log(`Given Array: ${array5}`);
let res3 = descArray(array5);
console.log(`Descending order Array: ${res3}`);

console.log("========= probelm No. 06. Javascript program to find the 3rd largest number in an array. =========");
let array6 = [5, 4, 6, 8, 3, 9, 1, 4];
function lastThirdEle(arr6) {
    let arraySort3 = arr6.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    console.log(`ThirdLast Element of Array: ${arraySort3[arraySort3.length-3]}`);
}
console.log(`Given array: ${array6}`);
lastThirdEle(array6);

console.log("========= probelm No. 07. Javascript program to find 2nd largest number in an array. =========");
let array7 = [5, 7, 1, 8, 4, 9, 3, 2];
function lastSecEle(arr7) {
    let arraySort4 = arr7.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    console.log(`SecondLast Element of Array: ${arraySort4[arraySort4.length-2]}`);
}
console.log(`Given array: ${array7}`);
lastSecEle(array7);

console.log("========= probelm No. 08. Javascript find the largest number in an array. =========");
let array8 = [5, 8, 3, 6, 9, 2, 7, 4];
function largestEle(arr8) {
    let arraySort5 = arr8.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    console.log(`Largest Element of Array: ${arraySort5[arraySort5.length-1]}`);
}
console.log(`Given array: ${array8}`);
largestEle(array8);

console.log("========= probelm No. 09. Javascript program to find 2nd smallest number in an array. =========");
let array9 = [5, 9, 7, 3, 8, 4, 1, 5, 2];
function secSmallestEle(arr9) {
    let arraySort6 = arr9.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    console.log(`2nd Smallest Element of Array: ${arraySort6[1]}`);
}
console.log(`Given array: ${array9}`);
secSmallestEle(array9);

console.log("========= probelm No. 10. Javascript program to find the smallest number in an array. =========");
let array10 = [4, 7, 3, 4, 9, 5, 3, 8, 2, 6];
function smallestEle(arr10) {
    let arraySort7 = arr10.sort((n1, n2)=>{
        return n1 > n2 ? 1 : -1;
    });
    console.log(`Smallest Element of Array: ${arraySort7[0]}`);
}
console.log(`Given array: ${array10}`);
smallestEle(array10);

console.log("========= probelm No. 11. Javascript program to remove the duplicate element in an array. =========");
let array11 = [4, 7, 3, 4, 9, 5, 3, 8, 2, 6];
console.log(`Given Array: ${array11}`);
let duplicate = [...new Set(array11)];
console.log(`After removing duplicate: ${duplicate}`);

console.log("========= probelm No. 12. Javascript program to print Odd and Even number from an array. =========");
function EvenOddnNo (arr){
    let EvenNo = [];
    let OddNo = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            EvenNo.push(arr[i]);
        } else{
            OddNo.push(arr[i]); 
        }  
    }
    console.log(`EvenNoArr: ${EvenNo}`);
    console.log(`EvenNoArr: ${OddNo}`);
}
let array12 = [4, 6, 2, 5, 8, 1, 9, 3, 7]
console.log(`Given Array: ${array12}`);
EvenOddnNo (array12);

console.log("========= probelm No. 13. Javascript Program to copy all elements from one array into another array. =========");
let array13 = [1, 2, 3, 4, 5];
console.log(`Given Array: ${array13}`);
let newarr = [...array13];
console.log(`new Array: ${newarr}`);

console.log("========= probelm No. 14. Javascript program to find the frequency of each element in the array. =========");
let array14 = [1,,2, 2, 3, 3, 3, 4, 4, 4, 4];
let frequencyEle = {};
for (let index = 0; index < array14.length; index++) {
    let element = array14[index];
    if (frequencyEle[element]) {
        frequencyEle[element]++;
    } else {
        frequencyEle[element] = 1;
    }
}
console.log(frequencyEle);

console.log("========= probelm No. 15. Javascript program to left rotate the elements of an array. =========");

console.log("========= probelm No. 16. Javascript Program to print the duplicate element of an array. =========");
function findDuplicateFromArray(arr) {
    let duplicate = [];
    let mapfre = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (mapfre[element]) {
            if (!duplicate.includes(element)) {
                duplicate.push(element);
            }
        } else {
            mapfre[element] = true;
        } 
    }
    console.log(`Duplicate elements: ${duplicate}`);
}
let array16 = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
console.log(`Given Array: ${array16}`);
findDuplicateFromArray(array16);

console.log("========= probelm No. 17. Javascript Program to print the elements of an array. =========");
function printArrayEle(arr) {
    console.log(`new Array: `);
    arr.forEach(element => {
        console.log(element);
    });
}
let array17 = [1, 2, 3, 4, 5];
console.log(`Given Array: ${array17}`);
printArrayEle(array17);

console.log("========= probelm No. 18. Javascript Program to print the elements of an array in reverse order. =========");
let array18 = [1, 2, 3, 4, 5];
console.log(`Given array: ${array18}`);
console.log(`Revese Array:`);
for (let i = array18.length; i > 0; i--) {
    console.log(i);
}

console.log("========= probelm No. 19. Javascript Program to print the element of an array present on even position. =========");
function evenPosition(arr) {
    for (let i = 1; i < arr.length; i=i+2) {
        console.log(arr[i]); 
    }
}
let array19 = [1, 6, 3, 4, 2, 6, 3, 9];
console.log(`Given Array: ${array19}`);
console.log(`Even Position Element: `);
evenPosition(array19);

console.log("========= probelm No. 20. Javascript Program to print the element of an array present on odd position. =========");
function oddPosition(arr1) {
    for (let i = 0; i < arr1.length; i=i+2) {
        console.log(arr1[i]); 
    }
}
let array20 = [1, 6, 3, 4, 2, 6, 3, 9];
console.log(`Given Array: ${array20}`);
console.log(`Odd Position Element: `);
oddPosition(array20);