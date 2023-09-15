const accountId = 7893
let accountEmail = "adgsgd@google.com"
var accountPassword = "56754b"
accountCity = "Meerut" //Bad way of assigning values.
let accountState

// accountId = 67 //changes in const key word not allowed.
accountEmail = "gsft@d.com"
accountPassword = "scnbgyi89"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
