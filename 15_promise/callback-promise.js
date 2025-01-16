function getUser(userId){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      // 1초 지나서 실행 할 내용
      try{
        const idol = {
          id : userId,
          name : '장원영',
        }
        resolve(idol);
      } catch{
        reject(error);
      }
    },1000);
  })
}


// 게시글 얻어오기
function getArticle(articlesID){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try{
        const articles = [
          {
            id : 1,
            name : '장원영 첫 글',
          },
          {
            id : 2,
            name : '장원영 두번째 글',
          }
        ];
        resolve(articles);
      }catch{
        reject(error);
      }
    },1000);
  })
  
}


function getComments(commentId){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      try{
        const comments = [
          {
            id : 1,
            comment : '첫 댓글',
          },
          {
            id : 2,
            comment : '두번째 댓글',
          },
          {
            id : 3,
            comment : '세번째 댓글',
          }
        ];
        resolve(comments);
      }catch{
        reject(error);
      }
    }, 1000)
  })
  
}

//Async : 비동기, await : 기다림...
//늘 같이 다니는 짝
async function runPromise(){
  await getUser(2)
  .then((user)=>{
    if(user != null){
      console.log('User : ' ,user);
    }else{
      console.log('자료가 없어요.');
    }
  })
}



getUser(1)
.then((x) => {
  console.log(x);
  return getArticle(x.id);
})
.then((article) => {
  console.log(article);
  return getComments(article[0].id);
})
.then((comments)=>{
  console.log(comments);
})
.catch((err) => {
  console.log('err');
})
.finally(() => {
  console.log('Finally');
});




runPromise();