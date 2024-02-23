//NOTE: in js array is object,  array size not fixed
//  array creation by literal and constructor

// literal syntax
// myArr = [1, 2, 3, 4, 5];
// console.log(myArr[2])

// ----------------Array() constructor- passing the elements to put inside the array as arguments.--------------
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[6])
// gives undefined

// you can assign value noble[4] = 'shivam';

//  array gives us prototype access

//--------------------- Array methods--------------------------------------------------------------
// myArr = [1, 2, 3, 4, 5];
//--------- push--add to last pop-remove to last unshift- add to start shift- remove from start
// myArr.push(10,11,12);
// myArr.pop()

//NOTE :    you can also add using SPREAD let add = [10,20,30]
//          myArr.push(...add)

// myArr = [1, 2, 3, 4, 5];
// myArr.unshift(10,11,12,14);
// myArr.shift(10)
// console.log(myArr);

// INDEX OF NO WHICH IS NOT PRESENT ARRAY IS -1

// .includes(9) .indexOf(19)  .length

// .join()

// ------splice() and slice()-----------------

// NOTE:  slice(1,4)  takes 1 to 3 exclude 4  not mutate original array
//        splice(1,4)  takes 1 to 4   mutates original array

// let array = [1, 2, 3, 4, 5];
// let newArr = array.slice(1, 4);
// console.log(array);
// console.log(newArr);










// -------------Multidimensional Arrays----------------------------------------------------------------

// array inside another array nested array
// let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
// console.log(elements[0]);  [['H', 'Li', 'Na'], ['Be', 'Mg']]

// console.log(elements[0][0]);  ['H', 'Li', 'Na']

// console.log(elements[0][0][0]);  'H'

// sparshing in array empty
// let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
// console.log(firstGroup);

//------ array comparison by references not elements
// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = dough1;

// dough1 === dough2; // true

// Another way only to primitive values not objects nested array works see example
// const compareArr = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//     	if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true
// };
