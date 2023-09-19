// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Shreyam"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

    // nested Object
const regularUser = {
    email: "shreyam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shreyam",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname?.userfullname.firstname); //? is for optional chaining

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"a", 6:"b"};
// const obj3 = {obj1 , obj2};  it will assign objs into obj (not merging)
const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj5 = {...obj1, ...obj2, ...obj4}
console.log(obj3);
console.log(obj5);
console.log(obj5 === obj3);

// when valus are coming from DataBases (array of objects) format

const user = [
    {
        id: 1,
        email: "sfdf@gmail.com"
    },
    {
        id: 2,
        email: "foof@gmail.com"
    },
    {
        id: 3,
        email: "poop@gmail.com"
    },
]
console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //for checking if that property exists in that object or not
console.log(tinderUser.hasOwnProperty("isLogged"));

// all objects methods :-
// Object.assign()
// Object.create()
// Object.defineProperties()
// Object.defineProperty()
// Object.entries()
// Object.freeze()
// Object.fromEntries()
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.getPrototypeOf()
// Object.groupBy() Experimental
// Object.hasOwn()
// Object.prototype.hasOwnProperty()
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.prototype.isPrototypeOf()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.prototype.propertyIsEnumerable()
// Object.seal()
// Object.setPrototypeOf()
// Object.prototype.toLocaleString()
// Object.prototype.toString()
// Object.prototype.valueOf()
// Object.values()

// object De-structuring :-

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Shreyam Singh"
}

// course.courseInstructor or course["courseInstructure"]

const {courseInstructor: Instructor,price} = course
// console.log(courseInstructor);
console.log(Instructor);
console.log(price);

// use in react :-
// const navbar = ({props}) => {

// }

// navbar(company = "shreyam")

// JSON when API calls 
// {
//     "name" : "Shreyam",
//     "coursename" : "JS",
//     "price" : 4500,
//     "site_admin" : false
// }

// API in Array format
[
    {},
    {},
    {}
]