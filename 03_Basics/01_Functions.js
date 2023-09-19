function SayMyName() {
  console.log("S");
  console.log("H");
  console.log("R");
  console.log("E");
  console.log("Y");
  console.log("A");
  console.log("M");
}

// SayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 9);
console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter your username.");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shreyam"));

// using rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 59, 7009, 34, 78));

const user = {
    username : "Shreyam",
    prices : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const newArrayValue = [200, 500, 790, 576];

function getSecondValue(anyArray) {
    return anyArray[1];
}

console.log(getSecondValue(newArrayValue));
console.log(getSecondValue([100, 789, 90, 67,78]));