var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var nums = line.split(',').map(function(num) {
    return parseInt(num);
  });
  var current =  nums[1];
  
  while (nums[0] > current) {
    current += nums[1];
  }

  return current;
}
