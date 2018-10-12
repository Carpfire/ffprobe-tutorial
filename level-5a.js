//Alright, let's finish this! We'll use something called a regular expression to search not just for a file with a particular name but for all video files in a directory. Again, we'll split this logic into two steps; feel free to skip ahead to 5-b if you're ready.


//level 5-a (regex test)
var cp = require('child_process');
var fs = require('fs');

var dirPath = process.argv[2]; //this time use a directory that contains more than one video
var files = fs.readdirSync(dirPath)

var re = /mp4/; // TODO 1: insert a regular expression here for the file extension of your videos (.mov, .mp4, etc.) that isn't case sensitive -- Hint: look up regular expressions on w3schools

for (var i = 0; i < files.length; i++) {

  if (re.test(files[i]) === true) { // TODO 2: replace the true in these parentheses with a method that tests whether the file has the extension you defined in your re variable -- Hint: that w3 page you looked up a minute ago has the answer. Check the Methods section.

    console.log(`${files[i]} is a video`);
  }}
