const fs = require("fs");


// fs.writeFileSync('./text.txt' , "First day of Node");


// fs.unlinkSync('./text.txt');

// syntex
// fs.readFileSync(path[, options])

const file = fs.readFileSync('./text.txt' , "utf-8", (err) => {})
console.log(file.tostring());
