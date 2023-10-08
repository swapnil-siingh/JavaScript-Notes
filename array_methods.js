// *Filter Method - To Filter out values
// ? To Filter out negative values
console.log(
    [2, 2, 3, 5, -4, 3].filter((value, index) => {
        // if (value >= 0) {
        //     return true;
        // } else {
        //     return false;
        // }
        return value >= 0; //! does the same work as above code
    })
);

//* Map method
//? It transforms an array into another array

console.log(
    [1, 2, 3].map((value, index) => {
        //? Adds 5 to each element of array
        return value + 5;
    })
);
