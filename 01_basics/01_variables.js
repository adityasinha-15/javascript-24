const accountId = 11223
let accountEmail ="aditya@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;

//accountId =1

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountState]);
