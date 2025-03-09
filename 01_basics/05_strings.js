const name = "indrajit"
const repoCount = 50

// console.log(name + repoCount + "hi");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Indrajit')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "           Indrajit     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://indrajit.com/indrajit%20behera"

console.log(url.replace("%20", "-"));

console.log(url.includes('indrajit'));

const testSplit = "Ind-Jit-Beh-test"
console.log(gameName.split("-"));