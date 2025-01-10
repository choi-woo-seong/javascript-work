let fs = require('fs');

let input = fs.readFileSync('./data/2_exam.txt').toString().split('\n');

let data = input[0].split(' ').map(Number);

 let maxValue = data.reduce((x,y) => Math.max(x,y));
 let minValue = data.reduce((x,y) => Math.min(x,y));

 let sValue = minValue.toString();
 let temp = '';

 temp = sValue[2] + sValue[1] + sValue[0];

 sValue = temp.toString();
 
 let answer = 0;
 for(let i of sValue){
  answer = maxValue * Number(i);
  console.log(answer);
 }
 console.log(data.reduce((x,y) => x * y));


 