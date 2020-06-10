const chalk = require('chalk');
const yargs = require('yargs');
const notesContent = require('./notes.js');
const notes = require('./notes');

// Customize yarg version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // required
      type: 'string', // value type
    },
    body: {
      describe: 'Note body',
      demandOption: true, // required
      type: 'string', // value type
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // required
      type: 'string', // value type
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your note',
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading the note!');
  },
});

yargs.parse();
