// Data types and Conversions Assignment UC2 LO1
// Data types
// String
const name = 'john doe';

// Numbers or Integer
const age = '1';

//Bolean
const hasKids = true;

//Null
const car = null;

//Undefined
let test;

// Reference type
const hobbies = ['coding, reading, '];

//Object Literal
const address = {
    city : 'Binondo',
    street : 'Recto'
};

const today = new Date();
// today.getMilliseconds();

console.log(name);
console.log(age);
console.log(hasKids);
console.log(car);
console.log(test);
console.log(hobbies);
console.log(address);
console.log(today);
console.log(typeof today);

/****************************************************************************************************************************/

// Conversion 
let val; // Initialize variable val null

// Number to String 
val = String(1234567890); // Convert number to string output
val = String(4 + 5); // Convert sum of two numbers to string --output 9 

// Boolean to String 
val = String(true);

// Date to String
val = String (new Date()); // Instantiate Date and convert to string, value of val 

// Array to String
val = String ([1,2,3,4,5]); 

// .toString(); Another option for converting number to string
val = (5).toString(); // Convert integer to string 
val = true.toString(); // Convert boolean to string

// String to Integer
val = Number('5');
// val = Number(true); -- output 1
val = Number(false); // 0 = false , 1 = true when you convert boolean to integer

// Array to Integer
val = Number([1,2,3,4,5]); // NaN means output is not a integer

// Parse string to integer 
val = parseInt('100.30'); // Another option for converting string to number Note: parseInt will round off the number
val = parseFloat('100.30'); // Another option for converting string to number Note: parseIFloat will display the decimal point

// Adding variables 
const a = String(8); 
const b = 3;
const sum = Number(a + b); /**  output is 83, reason is that when you add string and number 
it will just show the string plus the number on the side of the string more like concantination
Note: String cannot be add to a integer itmust be converted first before adding it to a number */ 

console.log(sum);
console.log(val);

/** Variables Assignment UC2 LO1 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 5, 2021
 */
