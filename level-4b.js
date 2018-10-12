//level 4-b (loop + conditional statement)
var cp = require('child_process');
var fs = require('fs');

var dirPath = process.argv[2]; //again make sure you're using a directory that contains your video along with some other files
var files = fs.readdirSync(dirPath)
console.log(files);

var i;
for (i=0; i < files.length; i++ )
  if (i === 1){
  //console.log(`file ${i} is: ${files[i]}`);


// TODO: Inside your for loop from 4a (or in a new for loop if you skipped 4a) write an if statement that is true only when we get to your video file in the loop (hint: check for a specific file name). Then put the following lines inside your if statement, so ffprobe runs only on your video and not on any other files in the directory:

      var pathToVideo = `${dirPath}/${files[i]}`;

      var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });

      var output = JSON.parse(ffprobe.stdout);
      console.log(JSON.stringify(output, null, 4));}
