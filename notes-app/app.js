// const add = require('./utils');
// const sum = add(2, 8);

// console.log(sum);

/**
 * Challenge: Define and use a function in a new file
 *
 * 1. Create a new file called notes.js
 * 2. Create getNotes function that returns 'Your notes ...'
 * 3. Export getNotes function
 * 4. From app.js, load in and call that function printing message to console
 */

const notesContent = require('./notes');

console.log(notesContent());
