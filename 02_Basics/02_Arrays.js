const marvel_heros = ["Iron Man", "Spider Man", "Thor"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const All_heros = marvel_heros.concat(dc_heros);
// console.log(All_heros);
// console.log(All_heros[3]);

const all_new_heros = [...dc_heros, ...marvel_heros]; //spread operator to merge any arrays
console.log(all_new_heros);

const another_array = [4, 6, 3, [4, 2, 7], 6, [8, [5, 67]], 7];
console.log(another_array.flat(Infinity));

// use in data scraping from another website -----
// Array.isArray(), Array.of(), Array.from()
console.log(Array.isArray("Shreyam"));
console.log(Array.from("Shreyam"));
console.log(Array.from({ name: "Shreyam" })); // return empty array [] interesting, we to specify ki keys yaa fir values ka array banana h

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
