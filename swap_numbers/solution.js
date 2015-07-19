var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var words = line.split(' ');

  var processed = words.map(function(word) {
    return word[word.length-1] + word.slice(1, word.length-1) + word[0];
  });

  return processed.join(' ');
}
