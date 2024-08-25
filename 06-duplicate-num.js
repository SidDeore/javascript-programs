const arrayNum = [ 11, 3, 4, 11, 4, 7, 3 ];
console.log(`Given Array: [${arrayNum}]`);
let newArray = [];
for (const i of arrayNum) {
    if (newArray.indexOf(i) === -1) {
        newArray.push(i);
    }
}
console.log(`After Removing duplicate element: [${newArray}]`);

