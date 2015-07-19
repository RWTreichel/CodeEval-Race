var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var words = line.split(' ');
  var longest = '';
  words.forEach(function(word){
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
