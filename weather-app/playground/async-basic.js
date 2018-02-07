console.log('starting app');

//async call -2sec delay
setTimeout(()=>{
  console.log('Inside of callback');
},2000);

// to put the code in the callback queue to run later post everything is rendered on the screen
//useful when page does not require wait for the response
setTimeout(()=>{
  console.log('2nd callback');
},0);

console.log('Finishing the app');
