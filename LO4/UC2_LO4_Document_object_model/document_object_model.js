// Document object model Method Object Properties Assignment UC2 LO4

let value;

value = document;
value = document.all;
value = document.all[5];
value = document.length;
value = document.all.length;
value = document.head;
value = document.body;
value = document.doctype;
value = document.domain;
value = document.URL;
value = document.charset;
value = document.contentType;

value = document.forms;
value = document.forms[0].id;
value = document.forms[0].method;
value = document.forms[0].action;
// value = document;
value = document.links;
value = document.links[1];
value = document.links[1].id;
value = document.links[1].className;
value = document.links[1].classList[0];

// value = documents.images;
value = document.scripts;

// value = document.scripts[2].getAttribute('src);

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(scripts){
     console.log(scripts.getAttribute('src'));
 });



console.log(scriptsArray);

/** Document object model Assignment UC2 LO4 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 9, 2021
 */
