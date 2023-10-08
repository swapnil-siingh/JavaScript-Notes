function greetings(name) {
    console.log("hello" + name);
}
greetings();
const function1 = function ohio() {
    //  variable can be used to call the function so we can delete the function name(ohio)
    // This will make the function anonymous and will be called using the variable
    // Hoisting doesn't work when we define a function inside a varibale
    // Hoisting means calling the function before declaring i.e.
    // function called();
    // function decalred(){
    // };
    console.log("moshi moshi");
};
console.log(function1);
console.log(typeof function1);
function1();
// Functions can also be stored in Obejcts
const object1 = {
    fun: (function4 = () => {
        console.log("hello");
    }),
};
object1.fun();
//Passing Values
const display = (params) => {
    console.log(params);
};
display("hello23");

//? Function calling a function
const fun1 = (run) => {
    run();
};
fun1(
    (fun2 = () => {
        console.log("hello_motmo");
    })
);

// * Set TimeOut Function- To call the function after sometime
setTimeout(() => {
    console.log("hello - Timeout - 4sec");
}, 4000);
// * Asynchronous Code
//?  Next Code Will not wait for timeout function and print the outcome of next output earlier
console.log("This should come after Timeout");

//* Set Interval Function we want to run in future
setInterval(() => {
    console.log("Interval of 4 sec"); //? Continously runs each 4 sec
    //! Used in Rock, Paper Scissor Game
}, 4000);


