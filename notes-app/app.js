const validator = require('validator');

const notesContent = require('./notes.js');

console.log(notesContent());

console.log(validator.isEmail('1028461931@qq.com'));
console.log(validator.isURL('https:/github.com'));
