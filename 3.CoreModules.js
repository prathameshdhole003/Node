//fs stands for file system
const fs = require("fs");

//Creating a new file
fs.writeFileSync("read.txt", "Welcome!!!");

//Append data to created file
fs.appendFileSync("read.txt", " How are you?");

//Reading a file
//Node.js includes an additional datatype called as buffer
//Buffer is used to store binary data while reading from a file or receiving packets over internet
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

//Binary data to original data
org_data = buf_data.toString();
console.log(org_data);

//Rename a file
fs.renameSync("read.txt", "readwrite.txt");