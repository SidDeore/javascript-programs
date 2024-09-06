console.log("======== program: 11. Palindrome ========");
function palindrome(str) {
    let palliWord = str.split('').reverse().join('');
    if (palliWord == str) {
        console.log(`given String: ${str}, It is palindrome.`);
    } else {
        console.log(`given String: ${str}, It is not palindrome.`);
    }
}
palindrome('madam');
palindrome('banana');
palindrome('radar');
palindrome('civil');
palindrome('noon');
palindrome('stats');

console.log("======== program: 12. Anagram ========");
function isAnagram(str1, str2){
    let anagramStr1 = str1.split('').sort().join('');
    let anagramStr2 = str2.split('').sort().join('');
    if (anagramStr1 == anagramStr2) {
        console.log(`Given String: ${str1}, ${str2}: It is an Anagram .`);
    } else {
        console.log(`Given String: ${str1}, ${str2}: It is not an Anagram.`);
    }
}
isAnagram('listen', 'silent');
isAnagram('heart', 'earth');
isAnagram('debit card', 'credit card');

console.log("======== program: 13. Remove character from the string. ========");
function removeChar(string1, string2) {
    let string3 = string1.split('');
    string3.splice(4,1);
    let string4 = string2.split('');
    string4.splice(0,1);
    console.log(string3.join(''));
   
   
}
removeChar("Java@Script", "@");
removeChar("Softyware", "y");
removeChar("Code mind", "");

console.log("======== program: 14. Reverse the words from given string. ========");
function reverseWord(str){
    console.log(`Input String: ${str}`);
    
    let str1 = str.split(' ')
    let reverseWord = str1.map((element)=>{
        return element.split('').reverse().join('');
    });
    return reverseWord.join(' ');
}
let finalOut = reverseWord('Arise! Awake! and stop not until the goal is reached');
console.log(`Output String: ${finalOut}`);
let finalOut1 = reverseWord('Learn with us, Job with us');
console.log(`Output String: ${finalOut1}`);

console.log("======== program: 15. Swapping String. ========");
function swap(word1, word2){
    console.log(`Before Swapping:`);
    console.log(word1);
    console.log(word2);
    [word1, word2] = [word2, word1];
    console.log(`After Swapping:`);
    console.log(word1);
    console.log(word2);
}
swap('Angular', 'React');

console.log("======== program: 16. Count spaces. ========");
function spaceCount(str){
    console.log(`Given String: ${str}`);
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        }
    }
    console.log(`Space count of string: ${count}`);
}
spaceCount('Revision is the mother of success');
spaceCount('Javascript is the language of internet world”');

console.log("======== program: 17. Find the numeric digits. ========");
function digitCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            count++;
        }
    }
    console.log(`Given String: '${str}' has No of numaric count: '${count}'`);
}
digitCount("Codemind2019");
digitCount("Twenty24");
digitCount('Bharath1947India');

console.log("======== program: 18. Program to count consonants. ========");
let vowel = 'aeiouAEIOU';
function consonantsCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            null;
        } else {
            count ++;
        }
    }
    console.log(`Given String: "${str}" has consonants count is: '${count}'`);
}
consonantsCount('JavaScript');
consonantsCount('HTML and CSS');
consonantsCount('Language Of Internet');
consonantsCount('I am UI Developer');
consonantsCount('Do or Die');

console.log("======== program: 19. Find longest word. ========");
function logestWord(str){
    let strSplit = str.split(' ');
    let lonegstWord = 0;
    let word = null;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > lonegstWord) {
            lonegstWord = strSplit[i].length
            word = strSplit[i]
        } 
    }
    console.log(`Given String: "${str}" and longest Word is: "${word}"`);
    
}
logestWord('Learn with us, Job with us');
logestWord('Fail. Learn. Grow. Evolve. Succeed');
logestWord('sWrite Debug and Execute');
logestWord('Frontend Developer - Complete Web Development');
logestWord('Do or Die');