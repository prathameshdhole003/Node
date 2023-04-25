const fs = require("fs");

// const data = fs.readFileSync("readwrite.txt", "utf-8");
// console.log(data);
// console.log("After reading data");

fs.readFile("readwrite.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("After reading data");

//Asynchronous selects the task that can be completed in min time
//Synchronous selects the task one by one