let myName = "Shreyam     "
// let myChannel = "Code        "

// console.log(myName.trueLength());


const myHero = ["Hulk", "Spiderman"]

const heroPowers = {
    Hulk : "Body",
    Spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.Shreyam = function () {
    console.log(`Shreyam is present in all Object ${this.Hulk}`);
}

Array.prototype.heyShreyam = function(){
    console.log(`Hello Shreyam`);
}

function createUser(username, score){
    this.username = username,
    this.score = score
}

// access by all
heroPowers.Shreyam()
myHero.Shreyam()
myName.Shreyam()
createUser.Shreyam()

// heroPowers.heyShreyam() 
// error bcuz heroPower is an object and heyShreyam() is defined specifically for arrays therefore not accessable by objects.



// Inheritance :-


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    isFulltime : true,
    __proto__ : TeachingSupport   //1st mtd (linking of two or more objects)
}

Teacher.__proto__ = User  //2nd mtd

// above one is out-dated mtd

// mordern syntax :-

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()