const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

//run the app like node app add
const argv = yargs.argv;
var command = argv._[0];
console.log('yargs:', argv);

if (command === 'add') {
  console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('Unable to create note');
  }
} else if (command === 'list') {
  console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  }
} else if (command === 'remove') {
  console.log('Removing the title');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note does not exist and not removed';
  console.log(message);
} else {
  console.log('command not recognised');
}
