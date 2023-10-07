class User{
    constructor(username){
        this.username = username
    }

    llogMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    //static keyword:- use to inhibit the use of mtd into new instance of object
    static createId(){ 
        return `123`
    }
}

const Shreyam = new User("Shreyam")
// console.log((Shreyam.createId())); // createId() is not accessible 


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")
// console.log(iphone.createId()); 
// here iphone is an instance of Teacher class, which extends User, hence here also createId() is not accessible.
iphone.llogMe()