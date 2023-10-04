// Object literal :-  (jaise classes in java & C++ sab kuch)

const user = {
    username : "Shreyam",
    price : 999,
    signedIn : true,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`); 
        //this keyword to refering current context (not hard coded)
        console.log(this);
    }
}
// console.log(user.welcomeMessage());
// console.log(this);


// Constructor function (always create a new instance/copy of piece of code):-
// new keyword is the constructor function (otherwise it will overwrite the data)

// const promiseOne = new Promise((resolve, reject) => {})
// const date = new Date();


function User (username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,
    this.welcomeMessage = function(){
        console.log(`${this.username}, welcome to the website`); 
        // console.log(this);
    }

    return this  //not necessary
}

const userOne = new User("Shreyam", 4, true)
const userTwo = new User("Raja", 6, false)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.welcomeMessage());
console.log(userOne.constructor);
console.log(userOne instanceof User);
console.log(userOne instanceof Object);
