// Events Element by class name  Assignment UC2 LO4

// document.querySelector('.clear-task').addEventListener('click', function() {
//     console.log('Hello world');
// });

document.querySelector('.clear-task').addEventListener('click', onclick);


function onclick(e) {
    // console.log('Clicked')
    let value;

    value = e;

// Event target element
    value = e.target;
    value = e.target.id;
    value = e.target.className;
    value = e.target.classList;
    value = e.target.classList[2];

// Event type
    value = e.type;

// Timestamp
    value = e.timeStamp;

// Coords event relative to windows
    value = e.clientY;
    value = e.clientX;
// Coords event relative to the element
    value = e.offsetY;
    value = e.offsetX;


    console.log(value);

}
/** Events Element Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 11, 2021
 */

