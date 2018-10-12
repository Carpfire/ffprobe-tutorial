//OK - let's get started! We'll begin by running ffprobe on a file the path to which we'll "hardcode" in our script. To do this, we'll assign the path to a variable (we've called the variable pathToVideo below) and use that variable as an argument in our ffprobe call.

var cp = require('child_process');

var pathToVideo = "C:\Users\liamc\OneDrive\Pictures\St Louis SN 2018 STME - GOLD - NYAC Red v Marx Fencing Academy.mp4" //TODO: Find a video file on your computer and put the path to it here as the value of this variable -- Hint: in js paths are stored as strings. If you don't know what this means, this is your first google assignment :)

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
