// Keyboard Events Element by class name  Assignment UC2 LO4

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Focus
taskInput.addEventListener('focus', runEvent);
// // Blur
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// paste
taskInput.addEventListener('paste', runEvent);
// Change
select.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // Get input value
  console.log(taskInput.value)
}
/** Keyboard Events Element Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 12, 2021
 */



