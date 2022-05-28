const os = require('os');
const path = require('path');
const fs = require('fs');
const a = require("./second.js")

console.log(a)
// reading data from files synchronously and asynchronously
// similarly we have write and writesync function as well

fs.writeFile('file.txt', 'this will not be appended, but re written', ()=>{
    console.log('necessary to add?')
});

fs.readFile('file.txt', 'utf8', (err,data) => {
    console.log(data)
})



const file = fs.readFileSync('file.txt')
console.log(file.toString())



console.log(a.stu)
//const a = path.basename('')