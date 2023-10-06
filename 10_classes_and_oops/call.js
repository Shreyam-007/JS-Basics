function setUsername (username){
    this.username = username
    console.log("called");
}

function createUser (username, email, password){
    setUsername.call(this, username)   
    //call:- to hold the reference of setUsername fxn 
    // this:- to pass the context defined in that fxn even after it popped out from the execution context
    this.email = email,
    this.password = password
}

const user = new createUser("Shreyam", "shreyam@fb.com", 123)
console.log(user);