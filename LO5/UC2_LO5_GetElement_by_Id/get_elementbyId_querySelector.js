// DOM Selector Assignment UC2 LO4
// Get element by id

// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'cyan';
// taskTitle.style.color = '#000';
// taskTitle.style.padding = '10px';
// // taskTitle.style.display = 'none';

// taskTitle.style.content = 'Hello';
// taskTitle.style.innerText = 'My Task';
// taskTitle.style.innerHTML = '<h1 style ="color : red">My Task</h1>'; 

// document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('ul li').style.background = 'purple';


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'cyan';
document.querySelector('li:nth-child(2)').style.color = 'cyan';
document.querySelector('li:nth-child(2)').textContent = 'Ninong';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#000';






/** DOM Selector Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 10, 2021
 */
