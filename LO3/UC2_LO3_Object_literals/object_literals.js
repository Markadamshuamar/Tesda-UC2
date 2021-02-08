// Object Literals Assignment UC2 LO3

const person = {
    firstName: 'Junnieboy',
    lastName: 'Velasquez',
    age: 22,
    email: 'junniedadmav@verizon.net',
    hobbies : ['Vlogging', 'Streaming', 'Podcast'],
    address: {
         city: 'Paranaque',
         street: 'Mabini',
    },
    getBirthYear: function () {
        return 2020 - this.age;
    }
};

let value;

value = person;

value = person.email;
value = person.firstName;
value = person.age;
value = person.hobbies[2];
value = person.address.street;
value = person.getBirthYear();

// console.log(value);

const people = [{name: 'Cong', age: 28}, {name: 'Viy', age: 20}, {name: 'Vien', age: 19
}];

for (let i = 0; i < people.length; i++){
    console.log(people[i].age);
}

/** Object Literals Assignment UC2 LO3 by Mark Adams D. Hu-Amar
 *  Tesda Web Development Course 
 *  Dated: Feb. 7, 2021
 */
