console.log(`====== Even Odd cehck ======`);
function EvenOddCheck(num) {
    if (num%2==0) {
        console.log(`${num}, is Even Number.`);
    } else {
        console.log(`${num}, is Odd Number.`); 
    }   
}
EvenOddCheck(2);
EvenOddCheck(45);
EvenOddCheck(13);
EvenOddCheck(0);
EvenOddCheck("70");

console.log(`====== Greater Number ======`);
function greaterNumber(n1, n2, n3){
    if(n1>=n2 && n1>=n3){
        console.log(`Greater nu is: ${n1}`);
    } else if (n2>=n1 && n2>=n3) {
        console.log(`Greater nu is: ${n2}`);
    } else {
        console.log(`Greater nu is: ${n3}`);
    } {
    
    }
}
greaterNumber(56, 80, 70);
greaterNumber(-20, -90, 0);