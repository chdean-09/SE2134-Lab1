'use strict'
var fs = require("fs");

/***
 * implementation of readFileSync
 */
var data = fs.readFileSync('debts.txt');
console.log(data.toString());
console.log("Program Ended for SYNC");

/***
 * implementation of readFile 
 */
fs.readFile('debts.txt', function (err, data) {
    if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended for A");