// Event Bubbling Assignment UC2 LO4


// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('Card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('Card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('Col');
// });

// Event Deligation

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);


function deleteItem(e) {
  //  if(e.target.parentElement.className === 'delete-item secondary-content') {
  //      console.log('Delete Item');
  //  }

   if(e.target.parentElement.classList.contains('delete-item')) {
     console.log('Delete item!');
     e.target.parentElement.parentElement.remove();
   }
}
/** Event Bubbling Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 11, 2021
 */

