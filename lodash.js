const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(_.nth(numbers, 1));
console.log(_.nth(numbers, 4));

const chunk = _.chunk(numbers, 2);  // divides the array in the chunks of 2 [[1,2],[3,4],........]
console.log(chunk);

const diff = _.difference(numbers, [1, 2, 5, 7]);  // 
console.log(diff);

const drop = _.drop(numbers, 3)   //drop the starting 3 numbers
console.log(drop);

const fill = _.fill(numbers, 1);  //fill the numbers array with 1
console.log(fill);


const users = [
    { "name": "sandeep", "gender": "male", "salary": 27000, "email": "sandeep@gmail.com", "password": "12" },
    { "name": "aman", "gender": "male", "salary": 10000, "email": "aman@gmail.com", "password": "12" },
    { "name": "rohit", "gender": "male", "salary": 28000, "email": "rohit@gmail.com", "password": "hellodfdf" },
    { "name": "sanjay", "gender": "male", "salary": 18000, "email": "sanjay@gmail.com", "password": "hellodfdf" },
    { "name": "shalini", "gender": "female", "salary": 40000, "email": "shalini@gmail.com", "password": "hellodfdfdfsdsdf" },
    { "name": "reena", "gender": "female", "salary": 30500, "email": "reena@gmail.com", "password": "hellodfdfdfsdsdf" }]


const count = _.countBy(users, "gender");
console.log(count);
console.log(_.groupBy(users, "gender"))

const maxsalary = _.orderBy(users, "salary", "desc");
console.log(_.take(maxsalary, 1))