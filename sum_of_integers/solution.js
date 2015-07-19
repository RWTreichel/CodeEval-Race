var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

var nums = fs.readFileSync(filename).toString().split('\n');

function solution(nums){

  return nums.map(function(num) {
    return parseInt(num);
  }).reduce(function(total, num) {
    return total + num;
  }, 0);
}

console.log(solution(nums));