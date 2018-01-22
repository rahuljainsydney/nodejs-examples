console.log('starting app.js')

const fs=require('fs');
const os=require('os');
const _=require('lodash');
const notes=require('./notes.js');

var user=os.userInfo();
console.log(notes.addNote(1,2));

//example of loadash
var filteredArray=_.uniq(['Rahul',1,2,2,3,4,'Rahul','Test nodemon'])
console.log(filteredArray);
//fs.appendFile('greeting.txt',`Hello ${user.username}!`);
