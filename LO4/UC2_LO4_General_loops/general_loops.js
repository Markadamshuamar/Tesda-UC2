// General Loops Assignment UC2 LO4
// For loop
// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log(' 2 is my favorite number');
//         continue;
//     }
//     if (i === 5 ){
//         console.log('Stop the Loop');
//         break;
//     }
//     console.log(`Number ${i}`);
// }

// // While loop 
// let i = 0;

// while (i < 10) {
//     console.log(`Number ${i}`);
//     i++;
// }

// // Do while loop
// do{
//     console.log(`Number ${i}`);
//     i++;
// }

// while (i < 10);

// Loop through arrays

const cars = ['Toyota', 'Ford', 'Hyundai', 'Cheverolette']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// For loop 
cars.forEach(function(car, index, array) {
    console.log(`${index} : ${index}`);
    console.log(`${array}`)
})

// Map 
const users = [{id : 1, name: 'Viy Cortez'},{id : 2, name: 'Vien Velasquez'},{id : 3, name: 'Trisha Mae Torio'},{id :
     4, name: 'Stella Raine'},{id : 5, name: 'Pat Velasquez'}]; // map is higher order of loop

const ids = users.map(function(user){
    return user.name;
});

console.log(ids);

// For In Loop
const password = {
    code : 'securty code',
    auth : 31502416,
    pass : 'Yankee Oscar Lima Oscar'
};

for (let x in password) {
    console.log(`${x} : ${password[x]}`);

}


/** General Loops  Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 9, 2021
 */
