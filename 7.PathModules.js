const path = require("path");

console.log(path.dirname("F:/Web Development/Node/7.PathModules.js"));   //Directory Name
console.log(path.extname("F:/Web Development/Node/7.PathModules.js"));   //Extension Name
console.log(path.basename("F:/Web Development/Node/7.PathModules.js"));  //Base Name

//Returns an object whose properties represent significant elements of the path such as dir, root ,base, etc
console.log(path.parse("F:/Web Development/Node/7.PathModules.js"));

const myPath = path.parse("F:/Web Development/Node/7.PathModules.js");
console.log(myPath.root);