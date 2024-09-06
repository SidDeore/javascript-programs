console.log(`========= Even Odd Check ==========`);
var evenOdd = function(num) {
    if (num%2==0) {
        console.log(`${num} is  Even number.`);
    } else {
        console.log(`${num} is  Odd number.`); 
    }   
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log(`========= Vote Eligible Check ==========`);
var voteEligible = function(age){
    if (age>=18) {
        console.log(`Your age is ${age} & your eligible for vote.`);
    } else {
        console.log(`ohhh, Your age is ${age} & your not eligible for vote.`);
    }
}
voteEligible(18);
voteEligible(20);
voteEligible(17);
voteEligible(40);
console.log(`========= String Length Check ==========`);
var stringLength = function(stringCheck){
    if (stringCheck.length>=10) {
        console.log(`${stringCheck} is string has more than 10 character.`);
    } else {
        console.log(`${stringCheck} is string has less than 10 character.`);
    }
}
stringLength("JavaScript-ES6");
stringLength("Java");
console.log(`========= String StrtWith word Check ==========`);
var stringStartWord=function(word){
    if (word.startsWith("Java")) {
        console.log(`The Givan String is ${word} & it's start with word "Java".`);
    } else {
        console.log(`The Givan String is ${word} & it's not start with word "Java".`);
    }
}
stringStartWord("JavaScript Language");
stringStartWord("Programming Language");
