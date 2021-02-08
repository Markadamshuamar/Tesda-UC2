// Function declarations Assignment UC2 LO3

function greet(firstName = 'Mark', lastName = 'Velasquez'){
    if (typeof firstName === 'undefined') {
        firstName = 'Cong';
    }
    if (typeof lastName === 'undefined') {
        firstName = 'TV';
    }
    console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet());

// Function expressions

const square = function(x){
    return x * x ; 
}
console.log(square(19));

// Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log(`Name ${name}`)
})('Bob');


// Property Methods

const todo = {
    add: function(){
        console.log('Add to do');
    },
    edit: function(id) {
        console.log(`Edit to do ${id}`)
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(100);
todo.delete();

/** Functions declarations Assignment UC2 LO3 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 7, 2021
 */
