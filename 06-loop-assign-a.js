console.log("========== Count of vowels ===========");
var sentence = "I am very good IT Developer";
var vowels="aeiou";
var count = 0;
for (let index = 0; index < sentence.length; index++) {
    sentence = sentence.toLowerCase();
    var sen = sentence.charAt(index);
    if (vowels.includes(sen)) {
        count++; 
    }
}
console.log(`Count of char of vowels is : ${count}`);

console.log("========== Sum of cube of numbers from 1 to 5 ===========");
var num=0;
for( var cube=1; cube<=5; cube++){
    num=num+cube*cube*cube;
}
console.log(`the sum of cube of numbers of 1 to 5 is: ${num}`);

console.log("========== log odd char from the givan string ===========");
function  oddPositionedChars(oddchar){
    console.log(`Givan String: ${oddchar}`);
    for (let index = 0; index < oddchar.length; index++) {
        var char = oddchar.charAt(index);
        if (index%2==1 && char != " ") {
            console.log(char);        
        }
    }
}
oddPositionedChars("Hard work always pays back.")
oddPositionedChars("Soon I will be UI IT champ.")