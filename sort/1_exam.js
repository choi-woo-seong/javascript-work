let fs = require('fs');

let input = fs.readFileSync('../coding/sortdata/1_exam.txt').toString().split('\n');
let data = [];

for(let i = 1; i < input.length; i++){
  data.push(...input[i].split(' ').map(Number));
}

data.sort((x,y) => {
  return x > y ? 1 : -1;
})

console.log(`${data[1]} ${data[0]}`);
console.log(`${data[3]} ${data[2]}`);
console.log(`${data[5]} ${data[4]}`);
console.log(`${data[6]} ${data[7]}`);
console.log(`${data[8]} ${data[9]}`);


