console.log("======= Even Odd Check ==========");
function evenOddCheck(num){
    if (num%2==0) {
        console.log(`${num} even`);
    } else{
        console.log(`${num} odd`);
    }
}
evenOddCheck(20);
evenOddCheck(21);
evenOddCheck(25);
evenOddCheck(28);

console.log("======= palindrome number ==========");
function palidromeno(str) {
    let rev = str.split('').reverse().join('');
    return str === rev;
}
var result = palidromeno("MadaM");
console.log(result);

var result = palidromeno("Hello");
console.log(result);

console.log("======= Largest No in an Array ==========");
function findLargest(arr){
    let maxnum = Math.max(...arr);
    return maxnum;
}
console.log(`Find Large no: ${findLargest([1,5,9,2])}`);

// console.log("======= FizzBuzz ==========");
// function fizzBuzz(){
//     for (let i = 0; i <= 100; i++) {
//         if (i%3==0 && i%5==0) {
//             console.log("FizzBuzz");
//         } else if (i%3==0) {
//             console.log("Fizz");
//         } else if (i%5==0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);   
//         }
//     }
// }
// fizzBuzz();

