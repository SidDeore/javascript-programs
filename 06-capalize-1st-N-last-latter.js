function capitalizeLatter(str) {
  console.log(`Given String: ${str}`);
  let splitstr = str.toLowerCase().split(' ');
  let array = [];
  for (let index = 0; index < splitstr.length; index++) {
    const char = splitstr[index];
    let firstChar = char.charAt(0).toUpperCase();
    let lastChar = char.charAt(char.length - 1).toLocaleUpperCase();
    let middleChar = char.slice(1, -1);
    let result = firstChar + middleChar + lastChar;
    array.push(result);
  }
  console.log(`New string with first n last letter character capitalize: ${array.join(" ")}`);
}
capitalizeLatter("How are you mate");
