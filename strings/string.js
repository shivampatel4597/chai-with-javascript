// strings are sequence of characters used to handle textual info on website
//  https://www.freecodecamp.org/news/javascript-string-handbook/
/*
Note  3 ways to create string string literal, template literAl  and  string constructor
 
1) using '' or "" no functional difference between them in JavaScript.

*/
//------- quote characters--------------------------------------------------------------

// console.log("this is \"hello dog\"");
// console.log("this is \'hello dog\'");

// -----Template literals-----------------------------------------------------

// inroduce in  ES6 gives flexibility to embedding variables and expressions within strings
// const names = "shivam son of Ramkali and Tejbali ";
// const greeting = `Hello, ${names}!`;
// console.log(greeting);

// ----multiline string------------------------------------------------------
// const multilineString = `   This is a multiline string  `;

// -----check tagged template literal programm --------------------------------------

// ----string constructor/string object----------------------------------------------------------

// const str = new String(
//   "this is a string object  they are instances of strings object"
// );
// console.log( str)

//-----------string obj conversion to primitive strings-------------

//  2 methods valueof() & toString()
/* const convert = str.toString();
const convert = str.valueOf();
 console.log(typeof convert);
 */

// The String.fromCharCode() Method   unicode system special no to each character

// -------concatenation of string-----------
//  2 ways + operator and .concat() method
// concat takes multiple arguments
// const greeting = str1.concat(str2, str3, '!');

/* less efficient when dealing with a large number 
    approaches, such as using template literals or array joins, might be more performant.
*/


// -----characterstics of strings-------------------------------
// immutability one created cannot be change modification creates new string
//  string[0] = 's';  this is wrong

//------- case manupulation methods----------------------------
// toUpperCase()  toLowerCase()

// Trimming whitespace removal
// trim(),leading whitespaces trimStart(), trailing trimEnd()

// String Searching
/* indexOf()  search substring from start
 lastIndexOf() search from end reverse searching
 if substring not present returns false
 includes()  return boolean true false used for conditional checks
*/
// startsWith()  and endsWith()  used for file type validAtion

 //const filename = "document.txt";
//const isDocument = filename.startsWith("document");  true
//const isTextFile = filename.endsWith(".txt");  true

