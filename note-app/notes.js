console.log('Starting  notes.js')
const fs = require('fs');

//Read the data from the file system
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

//Write data to the file stored in local file system
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Adding a new Note to the file, check for duplicates if record exist
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  //check for duplicate in the file, if the duplicate exist then don't add the note
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
  console.log('getting all notes');
}

//Retrieve the note from the file where all other notes are stored.
var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
  //console.log('filtered Note ', filteredNotes[0].body);
}

var removeNote = (title) => {
  //fetch all notes
  var notes = fetchNotes();
  //filter notes, removing the one with the title of arguement
  var filteredNotes = notes.filter((note) => note.title != title);
  //save new notes array
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

//reusable function for comments
var logNote = ((note) => {
  //add a break (debugger), use node inspect to run in the debugger
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
});
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
