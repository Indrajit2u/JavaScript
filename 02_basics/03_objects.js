// singleton 

// objective literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Indrajit",
    "full name":"Indrajit Behera",
    [mySym]: "myKey1",
    age: 41,
    location: "Mumbai",
    email: "ind@ind.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "mantu@gmail.com"
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
