// After ES6, class was introduced in JS (it's just syntactical sugar of prototype behaviour of JS ) b4 that we use constructor fxn do define it. Both use in a same way


class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    passwordEncryption (){
        return `${this.password}abc`
    }
    
    changeUserName (){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Shreyam", "shreyam@yahoo.com", 1234)
console.log(chai.passwordEncryption());
console.log(chai.changeUserName());


// Behind the scene:-

function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.passwordEncryption = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@yahoo.com", 1234)
console.log(tea.passwordEncryption());
console.log(tea.changeUserName());