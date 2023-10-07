// for of

// ["", "", ""]
// [{}, {}, {}]

const array = [1, 2, 3, 4, 5, "tt"]
for (const arr of array) {
    // console.log(arr);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`the letter is ${greet}`);
}


// Map :-

const map = new Map();
map.set("IN", "India")
map.set("PAK", "Pakistan")
map.set("BR", "Brasil")
map.set("INr", "India")

// console.log(map);

for (const [keys, values] of map) {  //de-structuring of array
    console.log(`${keys} and values are ${values}`);
}
// all map methods :-
// Map.prototype.clear()
// Map.prototype.delete()
// Map.prototype.entries()
// Map.prototype.forEach()
// Map.prototype.get()
// Map.groupBy() Experimental
// Map.prototype.has()
// Map.prototype.keys()
// Map.prototype.set()
// Map.prototype.values()


const myObject = { 
    game1 : "NFS",
    "game2" : "Spiderman"
}

for (const [keys, values] of myObject) { //myObject is not iterable by for of
    console.log(`${keys} and values are ${values}`);
}


for (const [keys, values] of Object.entries(myObject)) { //myObject is now iterable by for of
    console.log(`${keys} and values are ${values}`);
}

