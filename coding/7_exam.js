let fs = require('fs');

let input = fs.readFileSync('./data/7_exam.txt').toString().split('\n');

let data1;
let inputdata1 = [];
let data;
let inputdata = [];
let sumdata;
let count;
let result = [];

for(let i = 0 ; i < 1; i++){
  data1 = input[i][0].split(' ').map(Number);
  inputdata1.push(...data1);
}

for(let i = 1 ; i < input.length; i++){
    data = input[i].split(' ').map(Number);
    inputdata.push(...data);
}


let maxValue = Math.max(...inputdata.filter((x) => x));

for(let i = 0; i < inputdata1[0]; i++){
  result.push(inputdata[i]/maxValue * 100);
}
let num = result.reduce((x,y) => x + y) / inputdata1[0];
console.log(num.toFixed(6));

