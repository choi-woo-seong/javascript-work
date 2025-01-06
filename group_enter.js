const 하이브 = [
  [
    {
      groupName : '뉴진스',
      name : '하니',
      position : '센터',
      age : 21,
    },
    {
      groupName : '뉴진스',
      name : '민지',
      position : '보컬',
      age : 22,
    },
    {
      groupName : '뉴진스',
      name : '다니엘',
      position : '래퍼',
      age : 23,
    }
  ],
  [
    {
      groupName : '아일릿',
      name : '민주',
      position : '센터',
      age : 31,
    },
    {
      groupName : '아일릿',
      name : '윤아',
      position : '보컬',
      age : 32,
    }
  ]
]

// 아일릿의 민주 이름, 나이를 출력합니다.



let name = 하이브[1][0].name;
let age = 하이브[1][0].age;

console.log(`
  -이름 : ${name}
  -나이 : ${age}`);

for(let i = 0 ; i < 하이브.length; i++){
  console.log(하이브[i]);
}