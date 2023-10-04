// fetch("https://api.github.com/users/shreyam-007").then().catch().finally();

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, Cryptography, Network calls
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});


new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        //DB se data lene wala code
        resolve({username : "Shreyam" , email : "shreyam@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        // file acces karne ka code
        let error = true
        if (!error) {
            resolve({username : "Shreyam" , password : 123})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){  //use in DB Connection (Chaining)
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // file acces karne ka code
        let error = true
        if (!error) {
            resolve({username : "JS" , password : 123})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 2000)
})

async function consumePromiseFive (){ //most use in DB connection
    try {                        //must use try catch for error handling here
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers (){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`E: ${error}`);
//     }
// }

// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})