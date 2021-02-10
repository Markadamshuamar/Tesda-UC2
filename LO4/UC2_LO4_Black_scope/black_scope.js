// Block Scope Assignment UC2 LO4
// Global Scope 

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`function scope ${a} , ${b}, ${c}`); 
}

test();

if (true) {
    // Black Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`If scope ${a} , ${b}, ${c}`);
};

for(var a = 0; a < 10; a++) {
    console.log(`Loop ${a}`);
};


console.log(`Global scope ${a} , ${b}, ${c}`);
/** Block Scope Method Object Properties Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 9, 2021
 */
