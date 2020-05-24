const chalk = require("chalk");
const yargs = require("yargs");
const notesContent = require("./notes.js");
const getNotes = require("./notes");

// Customize yarg version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // required
      type: "string", // value type
    },
    body: {
      describe: "Note body",
      demandOption: true, // required
      type: "string", // value type
    },
  },
  handler: function (argv) {
    console.log(`Title:${argv.title}`);
    console.log(`Body:${argv.body}`);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",

  handler: function (argv) {
    console.log("Removing the note!", argv);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your note",
  handler: function () {
    console.log("Listing out all notes!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading the note!");
  },
});

yargs.parse();
