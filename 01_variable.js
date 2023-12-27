// const accountId = 144556;
// let accoundEmail = "hcq@gmail.com";
let accountCity = "Rewa";
let accountState;
// var declare but not defined .
//prints undefined

/* dont use var beacause it changes everything var are fucntion scoped and let is block scoped 
   see show1() and show2()
*/
// console.log([accountId, accoundEmail, accountCity]);
function show1() {
  let accountCity = "satna";
  console.log(accountCity);
}
show1();

function show2() {
  // accountCity = "satna";
  console.log(accountCity);
}
show2();

console.log(4 + 5);
