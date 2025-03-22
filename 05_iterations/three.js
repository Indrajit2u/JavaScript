//  for of

//  [""< "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const school = "Alanahat High School"

for (const education of school) {
    // console.log(`My School name is ${education}`);
    // console.log(`My School name is ${school}`);
    
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key, value);
    
}

const myObject = {
    'game' : 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }