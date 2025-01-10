let fs = require('fs');

let input = fs.readFileSync('./data/4_exam.txt').toString().split('\n');

let count = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number);

let minValue = Math.min(...data.filter((x) => x));
let maxValue = Math.max(...data.filter((x) => x));

console.log(minValue + ' ' + maxValue);