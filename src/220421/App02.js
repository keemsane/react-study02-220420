import React from 'react';
import '../../src/App.css';
import Food from './Food';
/**
 * 음식 데이터를 출력할 컴포넌트
 * @param {*} 음식이름 
 * @returns 내가 좋아하는 음식 이름
 */
// function Food({fav}) {
//     return (
//         <h1>I LIKE {fav}</h1>
//     );
// }

// 서버에서 전송된 데이터

const foodLike = [
    {
        id : 1,
        name : "KEEMCHY",
        image : "http://img.choroc.com/newshop/goods/024444/024444_1.jpg",        
    },
    {
        id : 2,
        name : "LAMIEN",
        image : "https://upload.wikimedia.org/wikipedia/commons/a/a9/%EB%8F%88%EC%BD%94%EC%B8%A0%EB%9D%BC%EB%A9%98.jpg",
    },
    {
        id : 3,
        name : "SAMGIOPSAL",
        image : "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    },
    {
        id : 4,
        name : "CHUKKUMY",
        image : "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202002/edfb543b-a18d-49f5-9aa7-12d2030da9ce.jpg",
    },
    {
        id : 5, 
        name : "JOKBAL",
        image : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWbMEr%2Fbtq329TgSg3%2FVXkAaCxbs1XbkHjDPQAWv1%2Fimg.png",
    },
    
]   // foodLike 배열


function App02() {
  return (
    <div>
      <h1>app.js를 app02.js로 대체해서 실습</h1>
      <hr />
      <h3>민철이가 좋아하는 랜덤 음식</h3>
      {/* <Food name = "KIMCHI" />
      <Food name = "RAMEN" />
      <Food name = "SAMGYOPSAL" />
      <Food name = "CHUKUMEE" /> */}
      
      {/* Map 사용해서 배열 원소 하나씩 출력 ( + 화살표 함수 활용) */}
      {foodLike.map((dish) => (
        <Food 
            key = {dish.id}
            name = {dish.name}
            picture = {dish.image}
            />            
      ))}
      
    </div>
  );
}

export default App02;
