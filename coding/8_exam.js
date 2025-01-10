let fs = require('fs');

let input = fs.readFileSync('./data/8_exam.txt').toString().split('\n');

let data1;
let inputdata1 = [];
let data;
let inputdata = [];
let count;
let result = [];
let str1;
let str2;
let str3;
let str4;

for(let i = 0 ; i < input.length; i++){
  data1 = input[i][0].split(' ').map(Number);
  inputdata1.push(...data1);
}

for(let i = 0 ; i < input.length; i++){
    data = input[i].split(' ').map(String);
    inputdata.push(...data);
}


count = inputdata1[1];

str1 = inputdata[2].substring(0,1).repeat(count);
str2 = inputdata[2].substring(1,2).repeat(count);
str3 = inputdata[2].substring(2,3).repeat(count);

result = str1.concat(str2,str3);

console.log(result);


count = inputdata1[2];

str1 = inputdata[4].substring(0,1).repeat(count);
str2 = inputdata[4].substring(1,2).repeat(count);
str3 = inputdata[4].substring(2,3).repeat(count);
str4 = inputdata[4].substring(3,4).repeat(count);

result = str1.concat(str2,str3,str4);

console.log(result);