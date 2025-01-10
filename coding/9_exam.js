let fs = require('fs');

let input = fs.readFileSync('./data/9_exam.txt').toString().split('\n');

let data;
let inputdata = [];
let result = [];


for(let i = 0 ; i < input.length; i++){
    data = input[i].split(' ').map(Number);
    inputdata.push(...data);
}

let sValue = inputdata[0].toString();
let temp = '';

temp = sValue[2] + sValue[1] + sValue[0];

sValue = temp.toString();

let sValue1 = inputdata[1].toString();
let temp1 = '';

temp1 = sValue1[2] + sValue1[1] + sValue1[0];

sValue1 = temp1.toString();

result.push(sValue);
result.push(sValue1);

let maxValue = result.reduce((x,y) => Math.max(x,y));

console.log(maxValue);