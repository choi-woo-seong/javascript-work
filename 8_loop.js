// 1. 구구단 출력
for(let i = 2 ; i <= 9 ; i++){
  for(let j= 1 ; j <= 9 ; j++){
    console.log(`${i} * ${j} = ` + i * j);
  }
}

// 2. # 찍기

let star = new Array(7).fill(' ');// 공백으로 채워진 배열 생성 fill() -> 배열안에 원하는 값 채움.

let mid = 3;

star[mid] = '*'; // 3번째 중심이 되는 별 삽입
let starPrint = star.join('');// join('') 사용 -> , 를 제거하여 문자열 생성 

console.log(starPrint);

for(let i = 1; i <= mid; i++){
  star[mid] = '*'; // 처음 for문이 시작될때 중심 별 찍음
  for(let j = 1; j<=i ; j++){
    star[mid + j] = '*';// 중심별 오른쪽에 별 찍기
    star[mid - j] = '*';// 중심별 왼쪽에 별 찍기
  }
  starPrint = star.join(''); //다시 배열에 생성된 ,를 제거하여 starPrint에 대입
  console.log(starPrint);// 출력
}

console.log(star);

//for ~ in
let idol = ['장원영', '안유진', '이서'];
for(let key in idol){
  console.log(`${key} : ${idol[key]}`);
}

//for ~ of
for(let value of idol){
  console.log(value);
}