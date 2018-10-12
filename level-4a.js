//Next, we'll start to add some logical operators to sort our files, allowing us to find the video we want from among the files in the directory.

//Step 4a introduces just the idea of a loop, in this case looping through files. 4b combines the loop with a conditional, or if, statement to find the file we want. Skip to 4-b if you're ready to move through this quickly.


//level 4-a (loop)
var cp = require('child_process');
var fs = require('fs');

var dirPath = process.argv[2]; //this time make sure your directory contains your video and some other files
var files = fs.readdirSync(dirPath)
console.log(files);
//TODO: Insert a for loop here that loops through the files array and logs the following each time through the loop:
var i;
for (i=0; i < files.length; i++ )
  console.log(`file ${i} is: ${files[i]}`);
