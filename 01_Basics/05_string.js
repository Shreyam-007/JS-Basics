const myname = "Shreyam"
const repoCount = 78

// console.log(myname + repoCount + "value"); (outdated JS)

// String interpolation (modern JS) /placeholder /value inject
console.log(`Hello, my name is ${myname} and I have ${repoCount} repos in total.`);

const gameName = new String("Mario-hc") // 2nd way - obj creation (waha bhi same hi ho rha) but dataType is diff
console.log(typeof gameName);
console.log(typeof myname);

console.log(gameName.length);
console.log(myname.charAt(5));

// All String methods :-

// anchor: ƒ anchor() 🚫
// at: ƒ at()
// big: ƒ big() 🚫
// blink: ƒ blink() 🚫
// bold: ƒ bold() 🚫
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith("dog.")
// fixed: ƒ fixed() 🚫
// fontcolor: ƒ fontcolor() 🚫
// fontsize: ƒ fontsize() 🚫
// String.fromCharCode()
// String.fromCodePoint()
// includes: ƒ includes("rat")
// indexOf: ƒ indexOf("dog")
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics() 🚫
// lastIndexOf: ƒ lastIndexOf() 
// length: 0
// link: ƒ link() 🚫
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small() 🚫
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike() 🚫
// sub: ƒ sub() 🚫
// substr: ƒ substr() 🚫
// substring: ƒ substring()
// sup: ƒ sup() 🚫
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Shreyam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shreyam.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));