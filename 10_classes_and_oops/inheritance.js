class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`this course is added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gamil.com", 124)
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

// masalaChai.addCourse() //not access to User

console.log(chai === masalaChai); //both diff
console.log(chai === Teacher); //as u know chai is an instance of Teacher (not same)
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(masalaChai instanceof Teacher);