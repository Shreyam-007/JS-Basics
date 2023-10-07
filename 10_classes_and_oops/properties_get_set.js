// Using getter and setter in functional manner:- 

function User(email, password){
    this._email = email,
    this._password = password

    Object.defineProperty(this, "password", {
        get : function(){
            return `${this._password}avn`
        },
        set : function(value){
            this._password = value
        }
    })

    Object.defineProperty(this, "email", {
        get : function(){
            return `${this._email.toUpperCase()}`
        },
        set : function(value){
            this._email = value
        }
    })
}

const chai = new User("chai@google.com", "123")
console.log(chai);
console.log(chai.email);
console.log(chai.password);