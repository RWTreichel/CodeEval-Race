var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var params = line.split(',');

  for (var i = params[0].length - 1; i >= 0; i--) {
    if (params[0][i] === params[1]) {
      return i;
    }
  }

  return -1;
}
