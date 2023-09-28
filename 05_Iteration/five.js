const coding = ["Ruby", "Python", "Java", "C++"];

coding.forEach(function (item) {    //no name req in callbackfn
  console.log(item);
});

coding.forEach((val) => {
  console.log(val);
});

function printMe (val) {
    console.log(val);
}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


// [{}, {}, {}] array of objects 
const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})