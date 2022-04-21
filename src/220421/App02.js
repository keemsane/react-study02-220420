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

function App02() {
  return (
    <div>
      <h1>app.js를 app02.js로 대체해서 실습</h1>
      <hr />
      <h3>민철이가 좋아하는 랜덤 음식</h3>
      <Food fav = "KIMCHI" />
      <Food fav = "RAMEN" />
      <Food fav = "SAMGYOPSAL" />
      <Food fav = "CHUKUMEE" />
    </div>
  );
}

export default App02;
