// Switches Assignment UC2 LO3

const color = 'yellow';

switch(color) {
    case  'red':
        console.log('Color is Red')
        break;
    case  'blue':
        console.log('Color is Blue')
         break;
    case  'orange':
        console.log('Color is Orange')
    default:
        console.log('Color is not Red or Blue')
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;  
    case 3:
        day = 'Wednesday'
        break;    
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}

console.log(day)

/** Switches Assignment UC2 LO3 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 7, 2021
 */
