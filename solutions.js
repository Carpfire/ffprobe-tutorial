//Solutions to all levels are below. Click on the arrows next to the level tags to hide any solutions you don't want to see yet.

<level 1>

    var cp = require('child_process');

    var pathToVideo = '/users/desktop/myVideo.mov' //your video path here

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 1>


<level 2>

    var cp = require('child_process');

    console.log(process.argv);
    var pathToVideo = process.argv[2];

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 2>


<level 3>

    var fs = require('fs');
    var cp = require('child_process');

    var dirPath = process.argv[2];
    var files = fs.readdirSync(dirPath)
    var pathToVideo = `${dirPath}/${files[0]}`;

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 3>


<level 4-a>

    var fs = require('fs');
    var cp = require('child_process');

    var dirPath = process.argv[2];
    var files = fs.readdirSync(dirPath)


    for (var i = 0; i < files.length; i++) {
      console.log(`file ${i} is: ${files[i]}`);
    }

</level 4-a>

<level 4-b>

    var fs = require('fs');
    var cp = require('child_process');

    var dirPath = process.argv[2];
    var files = fs.readdirSync(dirPath)
    console.log(files);

    for (var i = 0; i < files.length; i++) {

      if (files[i] == 'myVideo'){ //replace with name of your video

          var pathToVideo = `${dirPath}/${files[i]}`;

          var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });

          var output = JSON.parse(ffprobe.stdout);
          console.log(JSON.stringify(output, null, 4));

    }

    }

</level 4-b>


<level 5-a>

   var cp = require('child_process');
   var fs = require('fs');

   var dirPath = process.argv[2];
   var files = fs.readdirSync(dirPath)

   var re = /.mov$/i  //or /.mp4$/i, etc.

   for (var i = 0; i < files.length; i++) {

     if (re.test(files[i])) {
       console.log(`${files[i]} is a video`);
     }

   }

</level 5-a>

<level 5-b>

    var cp = require('child_process');
    var fs = require('fs');

    var dirPath = process.argv[2]; //this time use a directory that contains more than one video
    var files = fs.readdirSync(dirPath)

    var re = /.mov$/i  //or /.mp4$/i, etc.

    for (var i = 0; i < files.length; i++) {

      if (re.test(files[i])) {
        console.log(`${files[i]} is a video
          here is its ffprobe data: `);

        var pathToVideo = `${dirPath}/${files[i]}`;

        var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });

        var output = JSON.parse(ffprobe.stdout);
        console.log(JSON.stringify(output, null, 4));
      }

    }

</level 5-b>
