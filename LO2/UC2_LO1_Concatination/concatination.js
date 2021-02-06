// Concatination Assignment UC2 LO1
//String 
const firstName = 'William';
const lastName = 'Johnson';
const age = '30';
const str = 'Hello there my name is Happy';
const tags = 'Web Development, Web Design, Progamming';

let val; 

val = firstName + lastName;
// Concatination
val = firstName + ' ' + lastName;


// Append
val = 'Happy ';
val += 'Mundock';

val = 'Hello there my name is' + ' ' + firstName + ' and I am ' + age + 'years old'

// Escaping
val = "That's awesome, I cant wait to see you " 

// Length 
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// get value by index
val = firstName[5];// [] - bracket notation means to get value by index

// indexOf()
val = firstName.indexOf('a'); 
val = firstName.lastIndexOf('l'); // get the last index if the value is the same

// chartAt()
val  = firstName.charAt('2') // will return character on the stated index

// substring()
val = firstName.substring(0,5) // first param where the count start, second param where the count end. 

// Slice()
val = firstName.slice(2,4);
val = lastName.slice(-3);

// Split()
val = str.split(' ');
val = str.split('-');

// Replace()
val = str.replace('Happy', 'Milo');

// includes()
val = str.includes('is');


console.log(val);


/** Concatination Assignment UC2 LO1 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 5, 2021
 */
