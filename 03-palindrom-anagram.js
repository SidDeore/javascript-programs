console.log("======== 1. Write a function to check whether given string is Palindrome or not. ========");
function palindrome(word) {
    let palli = word.split('').reverse().join('');
    if (word === palli) {
        console.log(`Given String: '${word}' is palindrome`);
    } else {
        console.log(`Given String: '${word}' is not palindrone`);
    }
}
palindrome('madam');
palindrome('dad');
palindrome('hello')

console.log("======== 2. Write a function to check whether given string is anagram or not. ========");
function anagram(word1, word2) {
    let tolowerstr1 = word1.toLowerCase().split('').sort().join('');
    let tolowerstr2 = word2.toLowerCase().split('').sort().join('');
    if (tolowerstr1 == tolowerstr2) {
        console.log(`Given String: ${word1}, ${word2} :"It is Anagram."`);
    } else {
        console.log(`Given String: ${word1}, ${word2} :"It is not Anagram."`); 
    }
}
anagram('Silent','Listen');
anagram('Hello','World');
anagram('Such','much');