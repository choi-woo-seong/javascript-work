let fs = require('fs');

let input = fs.readFileSync('./data/3_exam.txt').toString().split('\n');

let data = input[0].split(' ').map(Number);

console.log(parseInt(data/10));

switch(parseInt(data/10)){
  case 10 : 
    console.log('A');
  break;
  case 9 : 
    console.log('A');
  break;
  case 8 : 
    console.log('B');
  break;
  case 7 : 
    console.log('C');
  break;
  case 6 : 
    console.log('D');
  break;
  default:
    console.log('F');
    break
}