console.log("======== count spaces in giiven string =========");
function spaceCount(str, latter){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index) == latter) {
            count++;
        }
    }
    console.log(`The string: '${str}' have "${count}" spaces.`);
}
spaceCount("Revision is the mother of success", " ");
spaceCount("JavaScript is the language of internet world", " ");
