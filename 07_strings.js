let string = "Stringiiiiiiiiiiiiiiiiii";

// using always template strings by ` backtics `
// interpolation using template string `hello this is ${name}`

const gameName = new String("shivampatel");
console.log(gameName); // here string is object (key value pairs) not array

// we can use different strings methods and functions
//JavaScript Methods

//A JavaScript method is a property of an object that contains a function definition.
//Methods are functions stored as object properties.
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(string.indexOf("g"));

//extract from 2 to 5
console.log(gameName.substring(2, 6)); // .substring(start,end)
// go through all methods of strings using console and mdn

// extract char from 2 to 5
console.log(gameName.slice(2, 6)); // same result as substring

// .slice method and also for reversing using negative
console.log(gameName.slice(-10, 4));

let originalString = "Hello, World!";

// Extract from index 7 to the end of the string
let slicedString = originalString.slice(7);
console.log(slicedString); // Outputs: World!

// input form to get only name not spaces

let football = "   cosco   ";
console.log(football);
console.log(football.trimStart());
console.log(football.trimEnd());
console.log(football.trim());

//.replace method and .inludes returns ture and false
const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX";

console.log(url.replace("youtube", "google"));

console.log(url.includes("www"));

/*    .split mehtod to break from specific point  split(separator)
       split(separator, limit)    */

// gives array completely
let value = "facebook.apple.spacex.tesla";
console.log(value);
console.log(value.split());
// array separated by commas after .
console.log(value.split("."));

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[4]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
