// Dates

const myDate = new Date();
console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());

// All Date methods :-
// Date.prototype.getDate()
// Date.prototype.getDay()
// Date.prototype.getFullYear()
// Date.prototype.getHours()
// Date.prototype.getMilliseconds()
// Date.prototype.getMinutes()
// Date.prototype.getMonth()
// Date.prototype.getSeconds()
// Date.prototype.getTime()
// Date.prototype.getTimezoneOffset()
// Date.prototype.getUTCDate()
// Date.prototype.getUTCDay()
// Date.prototype.getUTCFullYear()
// Date.prototype.getUTCHours()
// Date.prototype.getUTCMilliseconds()
// Date.prototype.getUTCMinutes()
// Date.prototype.getUTCMonth()
// Date.prototype.getUTCSeconds()
// Date.prototype.getYear() 🚫
// Date.now()
// Date.parse()
// Date.prototype.setDate()
// Date.prototype.setFullYear()
// Date.prototype.setHours()
// Date.prototype.setMilliseconds()
// Date.prototype.setMinutes()
// Date.prototype.setMonth()
// Date.prototype.setSeconds()
// Date.prototype.setTime()
// Date.prototype.setUTCDate()
// Date.prototype.setUTCFullYear()
// Date.prototype.setUTCHours()
// Date.prototype.setUTCMilliseconds()
// Date.prototype.setUTCMinutes()
// Date.prototype.setUTCMonth()
// Date.prototype.setUTCSeconds()
// Date.prototype.setYear() 🚫
// Date.prototype.toDateString()
// Date.prototype.toISOString()
// Date.prototype.toJSON()
// Date.prototype.toLocaleDateString()
// Date.prototype.toLocaleString()
// Date.prototype.toLocaleTimeString()
// Date.prototype.toString()
// Date.prototype.toTimeString()
// Date.prototype.toUTCString()
// Date.UTC()
// Date.prototype.valueOf()

// let myCreatedDate = new Date(2023, 0, 28);
// let myCreatedDate = new Date(2023, 0, 28, 14, 30);
// let myCreatedDate = new Date("2023-1-9");
let myCreatedDate = new Date("06-1-2023");
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`The Date is ${newDate.toDateString()} and the time is ${newDate.toLocaleTimeString()}`);
newDate.toLocaleString("default",{
    weekday : "long"
})

console.log(new Date(2023,0,21,5,40,56,4).toString());
console.log((new Date(2023,0,21,5,40,56,4)).getTime());
console.log(Date.UTC());
console.log(Date.now());
console.log(Date.parse());