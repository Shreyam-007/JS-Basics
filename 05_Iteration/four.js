// for in :-
const myObject = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    swift : "Swift by apple",
    rb : "Ruby"
}

for (const keys in myObject) {
    console.log(`${keys} and values are ${myObject[keys]}`);
}



const programming = ["js", "java", "cpp", "rb"]

for (const key in programming) { //keys of array ie index print ho jayega
    console.log(key);
}
for (const key in programming) {
    console.log(programming[key]);
}



const map = new Map();
map.set("IN", "India")
map.set("PAK", "Pakistan")
map.set("BR", "Brasil")
map.set("INr", "India")

// console.log(map);

for (const key in map) {
    console.log(key);
}