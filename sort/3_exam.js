let fs = require('fs');

let input = fs.readFileSync('../coding/sortdata/3_exam.txt').toString().split('\n');

let data = [];

for(let i = 1; i < input.length; i++){
  data.push(...input[i].split(' ').map(Number));
}

let count = 0;
let countdata= [];

data.sort();

console.log(data);

for(let i = 0; i <= data.length ; i++){
  if(data[i] === data[i+1]){
    console.log(i-1);
    //countdata.push(i-1);
    return;
  }else{
    console.log(i);
    //countdata.push(i);
  }
}

Math.


console.log(countdata);

