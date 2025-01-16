// 비동기 작업  처리할 때 사용하는 객체
// 인자로 콜백함수를 사용
// 약속해줘 콜백함수를 실행하고 그 결과를 돌려준다고
// 내 일 하면서 기다릴게

// const 주문 = new Promise((성공, 실패) => {
//   // 여기에 콜백함수를 적음
// })

// setTimeout(실행할 함수, 몇초후);
// 1000 -> 1초

const myPromise = new Promise((result, err)=> {
  //실행할 비동기 처리
  setTimeout(() => {
    //실행할 함수
   const text = prompt('따봉을 입력해 줘 선물줄게');

   if(text == '따봉'){
    result('👍');
   }else{
    err('따봉이 아니잖아~');
   }

  },2000);
});

myPromise
  //성공시
  .then((result)=>{
    console.log('Promise 결과 : ' + result);
  })
  //실패시
  .catch((err)=>{
    console.log('Promise 결과 : ' + err);
  })
  //성공 실패 무관하게 모두 실행
  .finally(()=>{
    console.log("Finally는 무조건 실행 됨");
  });

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then((data)=>{
  //JSON 형식을 Javascript Object 타입으로 변환 : json()함수가
  return data.json();
})
.then((x)=>{
  return x.filter((x)=> x.id >= 3);
})
.then((data)=> {
  console.log(data);
})
.catch((err) => {
  console.log('요청한 주소가 이상한데?');
})