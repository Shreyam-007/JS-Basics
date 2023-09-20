const user = {
    username : "Shreyam",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`); 
        //this keyword to refering current context (not hard coded)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this); 
//node env me current context is empty but there is lot of things when we run in browser env (window object will come/global object)

// this.something keyword not usable in function. but only console.log(this), gives reference of what is present inside the function

// function chai() {
//     let username = "Shreyam"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Shreyam"
//     console.log(this.username);
// }
// chai()

// Arrow function :- (same as this.something keyword not usable in function. but console.log(this) gives an empty object {})

const chai = () => {
    let username = "Shreyam"
    console.log(this.username);
}
chai()

// explicit return Arrow function :-

const addTwoNum1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNum1(5, 4));

// implicit return Arrow function :-

// const addTwoNum2 = (num1, num2) => num1 + num2
// const addTwoNum3 = (num1, num2) => (num1 + num2)
const addTwoNum3 = (num1, num2) => ({username : "Shreyam"})

console.log(addTwoNum3(5, 4));

const myArray = [2, 4, 6, 6, 7]
myArray.forEach(() => {})