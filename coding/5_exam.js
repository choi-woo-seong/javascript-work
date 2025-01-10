let fs = require('fs');

let input = fs.readFileSync('./data/5_exam.txt').toString().split('\n');

let data;
let inputdata = [];

for(let i = 0 ; i < input.length ; i++){
  data = input[i].split(' ').map(Number);
  inputdata.push(...data);
}

let maxValue = Math.max(...inputdata.filter((x) => x));

console.log(maxValue);
console.log(inputdata.findIndex(x => x === maxValue) + 1);