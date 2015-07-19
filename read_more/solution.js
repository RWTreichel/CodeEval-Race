var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  if (line.length <= 55) {
    return line;
  } else {
    var newLine = line.slice(0,40).trim() + '... <Read More>';
    return newLine;
  }
}
