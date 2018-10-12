//Success! But now it's time to start thinking a bit bigger picture. If we just want to run ffprobe on a single video, we can make that probe call directly from terminal. No coding needed! Ideally, we want to be able to run ffprobe on a whole directory, say a shoot folder, of video and then do some things with the data. We'll start here by searching in a directory to find a single video. To get started put the video file you've used so far into a new empty folder, so the folder contains your video and nothing else.


var cp = require('child_process');
var fs = require('fs');

var dirPath = process.argv[2]; // NOTE: we switched things up on you a bit here. We've defined a new variable dirPath to hold our input from the command line, we're now giving our script a folder as input rather than a single video file.

var files = fs.readdirSync(dirPath) //TODO: check out the documentation for this function and figure out what sort of input it needs. Google 'fs node documentation', and it should be the first thing that comes up. Send the function the input we need to find your file in the folder.

var pathToVideo = `${dirPath}/${files[0]}`; //ffprobe needs the full path to our video as an input not just the file name; this is a way of constructing that full path using a template literal -- if you're interested, this another googleable

console.log(pathToVideo);
var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
