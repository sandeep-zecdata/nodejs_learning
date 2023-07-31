const moment = require('moment');
 
const date = moment().toString();

console.log(date);
console.log("Current week is:", moment().week())
// // 2020-05-08T22:57:42+05:30
// console.log(moment().format());
 
// // May 8th 2020, 10:56:31 pm
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
 
// // Friday
// console.log(moment().format('dddd'));
 
// // May 8th 20
// console.log(moment().format("MMM Do YY"));
 
// // 2020 escaped 2020
// console.log(moment().format('YYYY [escaped] YYYY'));