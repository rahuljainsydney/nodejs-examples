console.log('starting app.js')

const fs=require('fs');
const os=require('os');
const notes=require('./notes.js');

var user=os.userInfo();
console.log(notes.addNote(1,2));
//fs.appendFile('greeting.txt',`Hello ${user.username}!`);
