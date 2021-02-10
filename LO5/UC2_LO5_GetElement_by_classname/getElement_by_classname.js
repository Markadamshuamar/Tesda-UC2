// Get Element by class name Assignment UC2 LO4

// const items = document.getElementsByClassName('collection_item');

// console.log(items);
// console.log(items[2]);

// items[2].style.color = 'red';
// items[3].style.textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection_item');


// let lis = document.getElementsByTagName('li');
// console.log(lis);
// // console.log(lis[0]);
// // lis[0].style.color = 'red';
// // lis[0].textContent = 'bug';

// // Convert html collection into array

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent = `${index} : Hey There`;
// });


// console.log(lis);


// QuerySelector
const items = document.querySelectorAll('ul.collection li.collection_item')
console.log(items);

items.forEach(function(item, index) {
    item.textContent = `${item} : Changed`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = 'purple';
    li.style.color = '#fff';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#ccc'   
};


/** Get Element by class name Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 10, 2021
 */

