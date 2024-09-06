console.log("========= 1st string logical program ===========");
const str1 = "Hello, World!";
console.log(`The length of the string ${str1} is: ${str1.length}.`);
const str2 = "JavaScript is the language of Internet";
console.log(`The length of the string ${str2} is: ${str2.length}.`);

console.log("========= 2st string logical program ===========");
function lastChar(str){
    console.log(`last Char of the string ${str} is: ${str.charAt(str.length-1)}`);
}
lastChar("Hey, my friend, Programming Language");
lastChar("I am learning logical programs");
lastChar("Angular");

console.log("========= 3rd string logical program ===========");
function firstChar(str){
    console.log(`First char of the string ${str} is: ${str.charAt(0)}`);
}
firstChar("React");
firstChar("Elon Musk");
firstChar("Apple founder is Stew Job");

console.log("========= 4th string logical program ===========");
function strInclude(str){
    var charInclude = str.includes('UI');
    console.log(`Does string ${str} conatins 'UI'?: ${charInclude}`);
}
strInclude(`React - UI Developer`);
strInclude(`UI Developer`);
strInclude(`Front end and backend technologies`);

console.log("========= 5th string logical program ===========");
function splitStr(str){
    console.log(`Given String: ${str}`);
    let strSplit = str.split(",");
    console.log('String Into Array:', strSplit);   
}
splitStr("apple,orange,banana");
splitStr("Stew,Bill,Jenny,Elon");

console.log("========= 6th string logical program ===========");
console.log("========= 1st step:- Using predefined methods ===========");
function revString(str){
    return str.split('').reverse().join('');
}
const str3 = "Software";
const str4= 'UI Developer';
console.log(`The reverse of "${str3}" string is: "${revString(str3)}".`);
console.log(`The reverse of "${str4}" string is: "${revString(str4)}".`);

console.log("========= 2st step:- Using predefined methods ===========");
function revStringUsingloop(str){
    let revString = '';
    for (let index = str.length-1; index >= 0; index--) {
        revString += str[index];
    }
    return revString;
}
const str5 = "Web Developer";
const str6 = "Billion Dollar";
const str7 = "Java";

console.log(`the reverse of "${str5}" string is: "${revStringUsingloop(str5)}"`);
console.log(`the reverse of "${str6}" string is: "${revStringUsingloop(str6)}"`);
console.log(`the reverse of "${str7}" string is: "${revStringUsingloop(str7)}"`);
