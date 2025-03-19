const user = {
    username: "indrajit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "mantu"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "indrajit"
//     console.log(this);

// }

// chai()

const chai = () => {
let username = "Indrajit"
console.log(this);

}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Indrajit"})

console.log(addTwo(3,4));

const myArray = [1,2,3,4,7]
myArray.forEach()