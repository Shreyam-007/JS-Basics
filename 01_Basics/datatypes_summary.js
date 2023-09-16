//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id);
console.log(id === anotherId); // give false value bcuz symbols are uniquly defined

const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Shreyam",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof myFunction);
console.log(heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive)  Heap(Non-Primitive)

// Primitive dataType goes in stack memory; And it provides copy of that element.
// So when we change something (through assigned variable) it gets changed in copy of element  not in original.

// Opposite of this. Non primitive dataType get stored in HEAP memory.
// And it gives reference value to assigned elements.
// So when assigned variable makes changes it changes the both values(original and assigned one.

let myname = "Shreyam"
let anotherName = myname
anotherName = "Abhi"

console.log(anotherName);
console.log(myname);
let user1 = {
    userEmail : "aaaa@gmail.com",
    upiId : "svgdd@yu"
}

let user2 = user1
user2.userEmail = "ttt@yahoo.com"
console.log(user1.userEmail);
console.log(user2.userEmail);