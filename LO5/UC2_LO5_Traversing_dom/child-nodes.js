// Child Nodes  by class name  Assignment UC2 LO4

let value; 

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection_item:first-child');
value = listItems;
value - list;


// get child nodes 
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;


// 1 Element
// 2 Attribute (depricated)
// 3 text node 
// 8 comments
// 9 Doc itself 
// 19 Doctype

// get children element nodes
value = list.children;
value = list.children[0];
list.children[0].textContent = 'Hello World';
console.log(value);


/** Child Nodes Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 10, 2021
 */

