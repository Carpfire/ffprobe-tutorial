# ffprobe Kit

#### What is ffprobe?
As you probably know, ffprobe is the tool we use to extract metadata from video files. ffprobe outputs the metadata as a javascript object (JSON) that we can then use in other scripts. You'll see what this looks like as soon as you get Level 1 up and running.

#### How to use this Kit
This kit walks you through how to build a simple script that calls ffprobe -- but BACKWARDS. Rather than, as many tutorials might, starting from the top and building our script line by line, in this kit we'll start from the last line of a script (where it actually does something) and work our way backwards to create the variables it depends on.

A few pointers:
  * Start on level 1. If that seems too easy, try moving up to a higher level.
  * When in doubt, log things to the console. The syntax for this is `console.log("description"+[variable]);`, or type "log" and hit Enter and Atom will autocomplete the syntax for you.
  * Google. A lot. "Real coders" look things up all the time, and the internet is full of helpful people.

## Requirements (of you and your computer)
1. node
2. ffmpeg in $PATH (instructions link)
3. a video file on your computer
4. (helpful) know what arrays are and how to access them
  * for help, look up the article on javascript arrays on the Mozilla Developers Network (MDN)
5. know how to use npm packages

Note: 1 and 2 should be setup for you on any LL computer.

## The Core Command
```
var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });

var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
```

In every level of this kit, you'll see the above three lines of code at the bottom...

## Before you begin...

In order to run the script for any level, including 1, you'll need to install dependencies. These are just code packages written by other people that you can borrow, which is handy because you don't want to have write everything from scratch all the time. Node handles dependencies through npm, it's package manager. You don't need to know anything about how npm works for this kit, but npm is a useful term for googling for coding. (We'll teach you a few of those terms as we go.) For now, we're going to use a package called 'child_process'. To install it, open a terminal window and navigate to the directory where you saved this kit.
