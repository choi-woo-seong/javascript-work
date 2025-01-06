// 1) 단일함수의 생성
console.log('1) 단일함수의 생성');
function calcurate(number){
  console.log(number * 10);
}

calcurate(4);

// 2) 여러개 파라미터 사용
console.log('2) 여러개 파라미터 사용');
function multiply(x,y){
  console.log(x * y);
}

multiply(3, 4);

// 3) default 파라미터 사용
console.log('3) default 파라미터 사용');
function minus(x, y = 1){
  console.log(x - y);
}

minus(5);
minus(5,3);

// 4) 결과 반환 받기
console.log('4) 결과 반환 받기');
function divide(x, y){
  return x / y;
}

let result = divide(7,3);

console.log(result);