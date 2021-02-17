// Create Element by class name  Assignment UC2 LO4

const li = document.createElement('li');
// add class 
li.className = 'collection_item';

// add ID attribute
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

// Creat text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link
const link = document.createElement('a');

link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into
li.appendChild(link);

// Append li to parent ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

/** Create Element Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 11, 2021
 */

