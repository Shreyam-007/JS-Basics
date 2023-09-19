// var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const name = "Shreyam";

  function two() {
    const website = "Github";
    console.log(name);
  }
  // console.log(website);
  two(); //every time diff Call Stack made
}
one();

if (true) {
  const username = "Shreyam";

  if (username === "Shreyam") {
    const website = " Github";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++ //Hoisting

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);  //cant be access b4 declaration here //Hoisting prblm

const addTwo = function (num) {
  return num + 2;
};
