console.log(`======== Print 1 to 10 ===========`);

var i = 1; // initialization
while (i<=10) {  // condition
    console.log(i);
    i++; // update Expression
}

console.log(`======== Print table of 10 ===========`);
var i = 10; // initialization
while (i<=100) {  // condition
    console.log(i);
    i=i+10; // update Expression
}


console.log(`======== do while. Print table of 10 ===========`);
var i=10; // initialization
do {
    console.log(i);
    i = i + 10; // update Expression
} while (i<=100);// condition

console.log(`========  while-loop Print the no from 20 to 10 in reverse order ===========`);
var i=20; // initialization
while (i>=10) { // condition
    console.log(i);
    i--; // update Expression
}
console.log(`========  do-while-loop Print the no from 20 to 10 in reverse order ===========`);
var i=20;
do {
    console.log(i);
    i--;
} while (i>=10);