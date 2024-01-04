console.log(4 > 3);
console.log("4" > 3); //but in typescript comparison of different datatypes not allowed
// in above only conversion check
/*Note : comparison converts null to a number treating it as 0 
thats why a) null >= 0  TRUE     b) null > 0 is FALSE            */
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// check undefined == 0,  und > 0,  und < 0;

// === checks conversion and datatype both
