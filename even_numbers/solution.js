var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  if (parseInt(line) % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}
