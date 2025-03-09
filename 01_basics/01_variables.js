const accountId = 9876
let accountEmail = "indrajit@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
//accountState is undefined value

// accountId = 2 // not allowed

accountEmail = "ind@gmail.com"
accountPassword = "1122"
accountCity = "Jagatsinghpur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// single console log
console.log(accountId);

// table console log
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
