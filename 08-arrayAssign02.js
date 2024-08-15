const array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`======== Total element of array =========`);
console.log(`Given Array: ${array}`);
console.log(`Total Element of Array: ${array.length}`);

console.log(`======== First and Last Element of Array =========`);
const arrayNum = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
// console.log(`Given Array: ${array}`);
console.log(`1st element: ${arrayNum[0]} and Last Element: ${arrayNum[arrayNum.length-1]}`);

console.log(`======== Third Last element of Array =========`);
const arrayNum1 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Third Last Element: ${arrayNum1[arrayNum1.length-3]}`);

console.log(`======== All Even no of Array =========`);
const arrayNum2 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let evenNumber=[];
for (const element of arrayNum2) {
    if (element%2==0) {
        evenNumber.push(element)
    }
}
console.log(`All Even no of Array: ${evenNumber}`);

console.log(`======== All Odd no of Array =========`);
const arrayNum3 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
// console.log(`Given Array: ${array}`);
let oddNumber=[];
for (const element of arrayNum3) {
    if (element%2==1) {
        oddNumber.push(element)
    }
}
console.log(`All Odd no of Array: ${oddNumber}`);

console.log(`======== Sum of all Even positioned elements =========`);
const arrayNum10 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let sumevenpos = 0;
for (let index = 0; index < arrayNum10.length; index++) {
    if (index%2==0) {
        const element = arrayNum10[index]
        sumevenpos = sumevenpos+element;
    }
    
}
console.log(`Sum of all even positioned elements are: ${sumevenpos}`);

console.log(`======== Sum of all Odd positioned elements =========`);
const arrayNum11 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let sumoddpos = 0;
for (let index = 0; index < arrayNum11.length; index++) {
    if (index%2==1) {
        const element = arrayNum11[index]
        sumoddpos = sumoddpos+element;
    }
    
}
console.log(`Sum of all Odd positioned elements are: ${sumoddpos}`);

console.log(`======== Sum of all elements =========`);
const arrayNum9 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let sum = 0;
for (const element of arrayNum9) {
        sum=sum+element;
}
console.log(`Sum of all elements are: ${sum}`);

console.log(`======== Numbers which are multiple of 5 =========`);
const arrayNum4 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let multiple=[]
for (const element of arrayNum4) {
    if (element%5==0) {
        multiple.push(element)
    }
}
console.log(`Numbers multiple of 5: ${multiple}`);
console.log(`======== is number 115 available in Array =========`);
const arrayNum5 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`is number 115 is available in Array: ${arrayNum5.includes(115)}`);
console.log(`======== is number 23 available in Array =========`);
const arrayNum6 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`is number 23 is available in Array: ${arrayNum6.includes(23)}`);
console.log(`======== Insert numbers: 55, 66 at index 3 in Array =========`);
const arrayNum7 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Given Array: ${arrayNum7}`);
arrayNum7.splice(3, 0, 55, 66);
console.log(`Updated Array after inserting numbers: ${arrayNum7}`);
console.log(`======== Delete 3 element staring from index 4 in Array =========`);
const arrayNum8 = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Given Array: ${arrayNum8}`);
arrayNum8.splice(4, 3);
console.log(`Updated Array  after deleted 3 element staring from index 4: ${arrayNum8}`);

