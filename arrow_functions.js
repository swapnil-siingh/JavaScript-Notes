//* Another way to write a function
const functionName = (parameter) => {
    console.log("function created");
};

functionName();

//* If only 1 parameter , no brackets required
const param = (params) => {
    console.log(params + 1);
};
param(2);

//* If one line code, no brackets required, no return statement required
const oneLine = (params) => params + 3;

console.log(oneLine(3));
