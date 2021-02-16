// const person = {
//     name: 'Shaun',
//     age: 26,
//     location: {
//         city: 'Johannesburg',
//         temp: 26
//     }
// }

// const {name = 'Anonymous', age, location} = person;
// const {city,temp: temperature} = person.location
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`)
// console.log(`It is ${temperature} degrees in ${city}`)

// const book = {
//     title: 'Master and Margarita',
//     author: 'Bulgakov',
//     publisher: {
//        name: 'Penguin'
//     }
// }

// const {name: publisherName = 'self published'} = book.publisher
// console.log(publisherName); //MacMillan, self-published

//Array destructuring

const address = ['123 Pennylane','Johannesburg', 'Gauteng','19147'];

const [, city, state = 'some state'] = address;

console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [menuItem,,mediumCost,] = item;

console.log(`A ${menuItem} costs ${mediumCost}`)

