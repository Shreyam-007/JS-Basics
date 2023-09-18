// arrays
const myArr = [0, 1, 2, 3, 4, 5, true, "Shreyam"];
const myHeros = ["Iron Man", "Captain USA", "Spiderman"];

const myArr2 = new Array(0, 1, 2, 3, 4, 5); // 2nd way of rep. an array

console.log(typeof myArr2);
console.log(typeof myArr[6]);


// some Array methods 
// myArr.push("67", 89, true)
// myArr.pop()
// myArr.unshift(34,"45")
// myArr.shift()


// console.log(myArr.indexOf("Shreyam"));
// console.log(myArr.includes(4));
// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr);

// array property :-
// Array: length

// All arrays methods :-
// Array.prototype.at()
// Array.prototype.concat()
// Array.prototype.copyWithin()
// Array.prototype.entries()
// Array.prototype.every()
// Array.prototype.fill()
// Array.prototype.filter()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()
// Array.prototype.flat()
// Array.prototype.flatMap()
// Array.prototype.forEach()
// Array.from()
// Array.fromAsync()
// Array.prototype.includes()
// Array.prototype.indexOf()
// Array.isArray()
// Array.prototype.join()
// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()
// Array.of()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.slice()
// Array.prototype.some()
// Array.prototype.sort()
// Array.prototype.splice()
// Array.prototype.toLocaleString()
// Array.prototype.toReversed()
// Array.prototype.toSorted()
// Array.prototype.toSpliced()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.values()
// Array.prototype.with()
