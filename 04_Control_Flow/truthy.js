const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values:- 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:-
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null , undefined

// when there is a call from a DB wet get 2 values, we have to identify weather it is null/undefined or not then use nullish operator to check(??)

let val1;
val1 = 5 ?? 10
let val2 = null ?? null
let val3 = null ?? undefined
let val4 = null ?? 45 ?? 78
console.log(val4);

// ternary operator :- (shortcut of if else)

// (condition) ? true statement : false statement ;

let iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
