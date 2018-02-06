const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

//run the app like node app add, command
//const argv = yargs.argv;  this command wont prompt user what are the arguements required
var command_arguement ={   // this yargs will allow user to show the arguements require with the command in the help
  title:{
    describe:'Title of note',
    demand:true,
    alias:'t'
  },
  body:{
    describe:'Body of note',
    demand:true,
    alias:'b'
  }
}
const argv = yargs
  .command('add','Add a new note',{
    title:command_arguement.title,
    body:command_arguement.body
  })
  .command('list','List all Notes')
  .command('read','Read all notes',{
    title:command_arguement.title
  })
  .command('remove','Remove a note',{
    title:command_arguement.title
  })
  //.help()
  .argv;
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
  var allNotes = notes.getAll();
  console.log(`printing  ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
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
