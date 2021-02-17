// Replace Element by class name  Assignment UC2 LO4

// creat element
const newHeading = document.createElement('h2');
// add id to
newHeading.id = 'task-title';
// New text nodes
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old newHeading
const oldheading = document.querySelector('#task-title');
// Parent 
const cardAction = document.querySelector('.card-action');
// Replace Element
cardAction.replaceChild(newHeading, oldheading);
// Remove list item
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[3].remove();
// Remove child element
list.removeChild(lis[2]);
// classes & attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;

// classes 
value = link.className;
value = link.classList;
value = link.classList[1];
link.classList.add('test');
link.classList.remove('test');

// attribute
value = link.getAttribute('href');
value = link.setAttribute('href', 'https://example.com');
link.setAttribute('title', 'example');
value = link.hasAttribute('title');
value = link;



console.log(link);


/** Replace Element Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 11, 2021
 */

