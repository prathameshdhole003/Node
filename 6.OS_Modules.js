//OS Modules -> Provide OS related utility methods and properties.

const os = require("os");

//Architecture(32-bit or 64-bit)
console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory);    //Free memory in bytes
console.log(`${freeMemory/(1024*1024*1024)} GB`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/(1024*1024*1024)} GB`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());   //Location of Temp folder

console.log(os.type());     //Windows