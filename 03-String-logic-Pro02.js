console.log(`======== program: 07. Count Charecter 'a' and 'A' =========`);
function charCount(char){
    let count = 0;
    for (let i = 0; i < char.length; i++) {
        if (char[i].toLowerCase() == 'a') {
            count ++;
        }
    }
    console.log(`The string:'${char}' has ${count} no of 'a' Charecter.`);
}
charCount("JavaScript");
charCount("Do or DieLearn with us, Job with us");
charCount("Empowering Dreams, Guaranteeing Futures");
charCount("Anny, My favorite fruit is Apple");

console.log(`======== program: 08. count vowels =========`);
function vowelCount(statement){
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < statement.length; i++) {
        if (vowels.includes(statement[i])) {
            count++ 
        }   
    }
    console.log(`The String:'${statement}' has ${count} vowels.`);
}
vowelCount("JavaScript");
vowelCount("HTML and CSS”");
vowelCount("Language Of Internet");
vowelCount("I am UI Developer");
vowelCount("Do or Die");

console.log(`======== program: 09. Words Counts =========`);
function wordCount(statement){
    let words = statement.split(' ');
    console.log(`the String:'${statement}' has ${words.length} words.`);
}
wordCount("JavaScript The language of Internet");
wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
wordCount("Beyond frameworks, Beyond Imagination");
wordCount("I am passionate software developer");