let fs = require('fs');

let input = fs.readFileSync('../coding/sortdata/2_exam.txt').toString().split('\n');

let data = [];

for(let i = 1; i < input.length; i++){
  data.push(...input[i].split(' ').map(String));
}

data.sort();

data.sort((x, y) => {
  if(x.length > y.length) return 1; // 크면 바꿈
  if(x.length < y.length ) return -1;// 작으면 바꿈
  return 1; //안바꿈
});


for(let i = 0 ; i < data.length; i++){
  console.log(data[i]);
}
