// // 1. 구구단 출력
// for(let i = 2 ; i <= 9 ; i++){
//   for(let j= 1 ; j <= 9 ; j++){
//     console.log(`${i} * ${j} = ` + i * j);
//   }
// }

// 2. # 찍기

let star = new Array(7).fill(' ');

let mid = 3;

star[mid] = '*';
let starPrint = star.join('');

console.log(starPrint);

for(let i = 1; i <= mid; i++){
  star[mid] = '*';
  for(let j = 1; j<=i ; j++){
    star[mid + j] = '*';
    star[mid - j] = '*';
  }
  starPrint = star.join('');
  console.log(starPrint);
}