let fs = require('fs');

let input = fs.readFileSync('./data/문제1_A+B.txt').toString().split('\n');

let data = input[0].split(' ').map(Number);

console.log('A + B = ' + data.reduce((x,y) => x + y));