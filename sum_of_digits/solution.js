var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var total = 0;

  for (var i = 0; i < line.length; i++) {
    total += parseInt(line[i]);
  }
  
  return total;
}
