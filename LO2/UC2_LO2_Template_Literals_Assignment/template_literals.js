// Template Literals Assignment UC2 LO1

const firstName = 'Moose';
const age = '11';
const job = 'Web Developer';
const city = 'Bulacan';
let html;

html = '<ul><li>Name: ' + 
        name + 
        '</li><li>Age ' + 
        age
        '</li><li>job ' + 
        job
        '</li><li>city ' + 
        city
        '</li></ul>'
// With template strings (es6)

function hello() {
    return 'Hello World!'
}

// Ternary operator
html= `
        <ul> 
            <li>Name: ${name} </li>
            <li>Age: ${age} </li>
            <li>Job: ${job} </li>
            <li>City: ${city} </li>
            <li>${ 5 + 4 } </li>
            <li>${hello()} </li>
            <li> ${age > 30 ? 'Over 30' : "Under 30"} </li>
        </ul>


    `;

    document.body.innerHTML = html;

console.log(val);


/** Template Literals Assignment UC2 LO1 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 6, 2021
 */
