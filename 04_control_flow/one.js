// if (condition) {scope}
// condition like 2==2, >, <, <=, >=, != not equal to, === (single = operator assigned, double == condition check)
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 51) {
//     console.log("less than 50")
// } else (
//     console.log("greater than 50")
// )

// console.log("Execute");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// unreadable code not suggested
// if (balance > 500) console.log("Test"), console.log("test 2");

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750){
//     console.log("Less than 750");
// } else if (balance < 900){
//    console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2 == 2) {
    console.log("Allow if all conditions match");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("allow if any one is true");
}