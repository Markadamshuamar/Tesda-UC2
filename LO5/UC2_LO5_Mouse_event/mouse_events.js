// Mouse Events Element by class name  Assignment UC2 LO4

const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
clearBtn.addEventListener('click', runEvent);
// Double Clicked
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
clearBtn.addEventListener('mouseenter', runEvent);
// Mouseleave
clearBtn.addEventListener('mouseleave', runEvent);
// Mouseover
clearBtn.addEventListener('mouseover', runEvent);
// Mouseout
clearBtn.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);



function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
};

/** Mouse Events Element Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 11, 2021
 */

