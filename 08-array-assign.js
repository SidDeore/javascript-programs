console.log("======== First and Last element of array =======");
var fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const fruits1 = fruits;
console.log(`Givan Array: ${fruits1}`);
console.log(`First element: ${fruits1[0]} and last element: ${fruits1[fruits1.length-1]}.`);

console.log("======== Add Papaya before Banana in Array =======");
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits2}`);
fruits2.unshift("Papaya");
console.log(`Updated Array: ${fruits2}.`);

console.log("======== Remove Array from Array =======");
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits3}`);
fruits3.splice(4, 1);
console.log(`Updated Array: ${fruits3}.`);

console.log("======== Add 'Pineapple' at last in Array =======");
const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits4}`);
fruits4.push("Pineapple");
console.log(`Updated Array: ${fruits4}`);

console.log("======== Add 'Dragon Friut' before 'water Melon' in Array =======");
var fruits5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits5}`);
fruits.splice(4, 0, "Dragon Friut");
console.log(`updated Array: ${fruits5}`);

console.log("======== Replace 'Orange' 'kiwi' =======");
var fruits6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits6}`);
fruits6.splice(1, 1, "Kiwi");
console.log(`updated Array: ${fruits6}`);

console.log("======== Element staring from index 1 to 4 =======");
var fruits7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits7}`);
console.log(`Element from 1 to 4 index: ${fruits7.slice(1, 4)}.`);

console.log("======== Last 3 element of the array =======");
var fruits8 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Givan Array: ${fruits8}`);
let element = fruits8[fruits8.length-3];
let element1 = fruits8[fruits8.length-2];
let element2 = fruits8[fruits8.length-1];
console.log(`Last 3 Element: ${element}, ${element1}, ${element2}`);

