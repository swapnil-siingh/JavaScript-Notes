//* Array got another method to loop through it
//? Earlier we used for loop
//todo -  In this method we use a array method called forEach();
//todo -   array.forEach(function(parameter value){});
//!  forEach function runs and stores the value of array in  the function parameter
["gobhi", "aloo", "baigan", "kaddoo"].forEach(function (value) {
    console.log(value);
});
//todo- To skip a iteration in for each function
//? We use return statement than break
["soda", "cola", "fanta"].forEach((element) => {
    //? arrows replaces the function keyword. (more info:Javascript/arrow_functions.js)
    if (element === "cola") {
        return; //? it skip the cola part and moves to next
    }
    console.log(element);
});
