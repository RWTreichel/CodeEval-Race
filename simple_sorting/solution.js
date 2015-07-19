var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var numStrings = line.split(' ');


  return numStrings.sort(function(a, b) {
    return parseFloat(a) - parseFloat(b);
  }).join(' ');
}
