// const accountId = 144556;
// let accoundEmail = "hcq@gmail.com";
var accountCity = "Rewa";
let accountState;
// var declare but not defined .
//prints undefined

/* 1. dont use var beacause it changes everything var are fucntion scoped and 
let is block scoped see show1() and show2()
   
   2. if we declare var outside and changes its value inside function 
   the value of var changes all over after that everywhere.
*/
// console.log([accountId, accoundEmail, accountCity]);
function show1() {
  // let accountCity = "satna";
  console.log(accountCity);
}
show1();

function show2() {
  accountCity = "mangawan";
  console.log(accountCity);
}
show2();

console.log(accountCity);
