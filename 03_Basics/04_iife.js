// Immediately Invoked Function Expressions (IIFE)

// (function defn)(execution)

// named IIFE :-
(function chai() {
    console.log(`DATABASE CONNECTED`);
})();


// IIFE not working here
// (const one = function(){
//     console.log(`DATABASE CONNECTED`);
// })();


// un-named IIFE :-
((name) => {
    console.log(`DATABASE CONNECTED TWO ${name}`);
})("Shreyam");