// Singleton object (made from constructor)
// Object.create

// non singleton object ( made from literals):-
const mySym = Symbol("key1");

const JS_user = {
  name: "Shreyam",
  "Full name": "Shreyam Singh",
  [mySym]: "mykey1",
  age: 18,
  email: "shreyam@yahoo.com",
  location: "Vijyawada",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

console.log(JS_user.lastLoginDays);
console.log(JS_user["lastLoginDays"]); //preferred way to access
console.log(JS_user["Full name"]);
console.log(typeof JS_user[mySym]); //to accessing a symbol

JS_user.email = "shreyam@chatgpt.com";
// Object.freeze(JS_user);
// JS_user.email = "shreyam@yoyoy.com";
// console.log(JS_user);

JS_user.greeting = function(){
    console.log("Hemlo JS User");
}
JS_user.greetingTwo = function(){
    console.log(`Hemlo JS User, ${this["Full name"]}`);
}
console.log(JS_user);
console.log(JS_user.greeting);
console.log(JS_user.greeting());
console.log(JS_user.greetingTwo());