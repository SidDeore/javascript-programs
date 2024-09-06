// console.log("====== program no: 10. find duplicate characters. ======");
// function duplicateCharCount(word){
//     let count = {};
//     let duplicate = []; 
//     for (let char of word) {
//         count[char] = (count[char] || 0)+ 1;
//     }
//     for ( const char in count) {
//         if (count[char] > 1) {
//             duplicate.push(char);
//         }
//     }
//     console.log(`${char}-${count}`);
// }
// duplicateCharCount("Banana");
// duplicateCharCount("Apple");
// duplicateCharCount("Software Developer");


// console.log(" Sir code ");

// let str = "Banana";  // a - 3, n - 2
// let finalOutput = {};
// for (let index = 0; index < str.length; index++) {
//     const element = str.charAt(index);
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//         const char = str.charAt(j);
//         if (char==element) {
//             count++;     
//         }
//     }
//     // console.log(element, count);
//     if (count>1) {
//         finalOutput[element] = count;
//     }  
// }
// // console.log(finalOutput);
// for (const key in finalOutput) {
//     const element = finalOutput[key];
//     console.log(`${key} - ${element}`);
    
// }


// console.log("====== program no: 10. find duplicate characters. ======");
// let outfinal={};
// function duplicateCharCount(word){
    
//     for (let i = 0; i < word.length; i++) {
//         const element = word.charAt(i);
//         let count = 0;
//         for (let j = 0; j < word.length; j++) {
//             const char = word.charAt(j);
//             if (char == element) {
//                 count++;
//             }
//         }
//         if (count>1) {
//             outfinal[element] = count;
//         }
//     }
//     for (const key in outfinal) {
//         const element = outfinal[key];
//         console.log(`${key} -> ${element}`);   
//     }
// }
// duplicateCharCount("Banana");
// duplicateCharCount("Apple")
// duplicateCharCount("Software Developer")

function duplicateChar(word) {
    const string = word.toLowerCase().split(""); // 'b'a'n'a'n'a' 'a'p'p'l'e'
    console.log(word);
    
    let countChar = {};

    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        countChar[element] = (countChar[element] || 0) + 1;
        // console.log(element : ${element},  countChar[element]: ${countChar[element]});
    }

    let duplicates = {};
    for (let value in countChar) {
        if (countChar[value] > 1) {
            duplicates[value] = countChar[value];
        }
    }
    return duplicates;
}

let resultOne = duplicateChar("Banana");
console.log(resultOne);

let resultTwo = duplicateChar("Apple");
console.log(resultTwo);

let resultThree = duplicateChar("Software Developer");
console.log(resultThree);