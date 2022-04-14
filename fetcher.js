const request = require('request');
const fs = require('fs');
let arguments = process.argv.slice(2);

//i need a function with two parameter URL and Path
//use request in the function, and fs
//URL and path is coming from commandline



request(arguments[0],(error, response, body)=>{
  if (error) {
    console.log('Error!');
  }
  if (response) {
    console.log('Responding!');
  }
  
  const content = body;
  fs.writeFile(arguments[1], content, err => {
    if (err) {
      console.error(err);
      return;
    }
    fs.stat(arguments[1], (err, stats) => {
      if (err) {
        console.log(`File doesn't exist.`);
      } else {
        console.log("Downloaded and saved " + `${stats.size}` + ' bytes ' + "to " + `${arguments[1]}`);
      
      }

      
    });
  
  });

});






