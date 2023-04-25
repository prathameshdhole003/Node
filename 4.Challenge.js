//CRUD operations
//1. Create a folder named Newfolder
//2. Create a file in it named bio.txt and add data into it
//3. Add more data into the file at the end of existing file
//4. Read the data without getting the buffer data at first
//5. Rename the file name to mybio.txt
//6. Now delete both the file and the folder

const fs = require("fs");

//Create a directory
fs.mkdirSync("Newfolder");

//Create a new file
fs.writeFileSync("Newfolder/bio.txt", "Prathamesh Dhole");

//Add more data to existing file
fs.appendFileSync("Newfolder/bio.txt", " I am learning web dev");

//Reading file data
data = fs.readFileSync("Newfolder/bio.txt", "utf8");
console.log(data);

//Rename the file
fs.renameSync("Newfolder/bio.txt", "Newfolder/mybio.txt")

//Delete file
fs.unlinkSync("Newfolder/mybio.txt");

//Delete folder
fs.rmdirSync("Newfolder");