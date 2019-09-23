const notesContent = require('./notes.js');

console.log(notesContent());

/**
 * Challenge: Use the chalk library in your project
 *
 * 1. Install version 2.4.1 of chalk
 * 2. Load chalk into app.js
 * 3. Use it to print the string 'Success!' to the console in green
 * 4. Test your work
 */
const chalk = require('chalk');

console.log(chalk.bold.bgGreen('Success'));
