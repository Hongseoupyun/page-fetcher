const request = require('request');
const fs = require('fs');
let arguments = process.argv.slice(2);

//i need a function with two parameter URL and Path
//use request in the function, and fs
//URL and path is coming from commandline


const URL = arguments[0]
request(URL,(error, response, body)=>{
  if (error) {
    console.log('Error!');
  }
  if (response) {
    console.log('Responding!');
  }
  
  const content = body;
  const filePath = arguments[1]
  fs.writeFile(filePath, content, err => {
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






