// Arrays Assignment UC2 LO1
// Creat some arrays 
const numbers = [16,22,35,41,90,5]; // index 4 previous value 50 
const numbers2 = new Array(22,48,56,55);
const fruit = ['Banana','Orange','Kiwi','Apples'];
const mixed = [1,'apple','a','day','keeps,','the','doctor','away',true,undefined,null,{a:1,b:2}];
const name = 'Happy'; 
let value;
let con
// Get array Length
// value = numbers.length;

// // Check if is array
// value = Array.isArray(numbers);

// // Get single value 
// value = numbers[2];
// value = numbers[0];

// // Insert to array -Replace value of a certain index
// numbers[0] = 55;

// // Find index value
// value = numbers.indexOf(36);


// Mutating Arrays
// add to end
// numbers.push(1000);

// // add to front
// numbers.unshift(2500);

// // Delete from end
// numbers.pop();

// // Take from front
// numbers.shift();

// // Splice()
// numbers.splice(0,4);

// // Reverse
// numbers.reverse();

// Concatinate arrays
// value = numbers.concat(mixed);

// // Sort arrays
// value = fruit.sort();
// value = numbers.sort();

// // Use the compare function
// value = numbers.sort(function(a, b) {
//     return a - b;
// });

// Descending
// value = numbers.sort(function(a, b) {
//     return b - a;
// });

// Find 
function over50(num) {
    return num>50; 
}

con = numbers.find(over50); // all integer is lower than 50 undefined output 
console.log(con); // --changed 1 value of index in the array to get output 90

/** Arrays Assignment UC2 LO1 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 6, 2021
 */
