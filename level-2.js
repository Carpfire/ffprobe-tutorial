//You nailed level 1 - yay! But it's kind of a pain to have to update your script anytime you want to run ffprobe on a new file. So, the next logical step is to get the video as an input to our script from the command line, so we can give our script new inputs without changing the script itself.

var cp = require('child_process');


//console.log(process.argv); // NOTE: built into node is this function -- process.argv -- that collects inputs from the command line and stores them in an array. Here we're logging that array, so you can see its structure.

// TODO 1: Run this script and log commandLineArguments to terminal, so you can see what kind of variable it is and what its structure is like.
var array1 = process.argv;

var pathToVideo = array1[2]; //TODO 2: Looking at your log from the previous run, define this variable so that it contains just the path to your video -- Hint: remember that you can grab an item from an array using its index

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
