class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    //_password, _email will not create race condition with constructor defined password, email & will be a private property variable which cant be access by the user

    // get always return, where as set always save the value 

    // here email and password variables are overwritten by getter and setter variables

    get password(){
        return `${this._password}hui`  
    }
    set password(value){
        this._password = value
    }


    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }

}


const chai = new User("s@gmail.com", "123")
console.log(chai);
console.log(chai.password);
console.log(chai.email);