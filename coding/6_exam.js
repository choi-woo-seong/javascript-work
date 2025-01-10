let fs = require('fs');

let input = fs.readFileSync('./data/6_exam.txt').toString().split('\n');

let data1;
let inputdata1 = [];
let data;
let inputdata = [];
let sumdata;
let count;
let result;

for(let i = 0 ; i < input.length; i++){
  data1 = input[i][0].split(' ').map(Number);
  inputdata1.push(...data1);
}

for(let i = 0 ; i < input.length; i++){
    data = input[i].split(' ').map(Number);
    inputdata.push(data);
}


for(let i = 1 ; i < input.length; i++){
  sumdata = (inputdata[i].filter((x) => (x > 10)).reduce((x,y) => x + y)) / inputdata1[i];
  count = inputdata[i].filter((x) => (x > sumdata)).length;
  result = count / inputdata1[i] * 100;
  console.log(result.toFixed(3) + '%');
}



