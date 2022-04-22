// Axios란?
// 자바스크립트로 비동기 통신을 할 수 있도록 해주는 모듈
// 자바스크립트에는 기본적으로 비동기 통신을 위한 XHR (XML Http Request) 존재
// XHR을 사용해 ajax 통신하는 데 사용 (사용법이 어려움)
// jquery를 사용해 ajax 통신을 쉽게 할 수 있음.
// (ex. $.ajax, $.get, $.post)
// frontend 개발 시 jquery의 각종 문제점 때문에 jquery를 사용하지 않게 되면서 비동기 통신을 쉽게 할 수 있는 방법이 필요
// React 및 Vue.js에서는 Axios 모듈을 사용하여 비동기 통신을 구현

// Axios 설치 가즈아~~~~
// > yarn add axios

// Axios 모듈 불러오기
// import axios from 'axios';

// Axios 사용법
// axios.통신방식(서버주소).then(콜백함수).catch(콜백함수)

// import axios from 'axios';

// console.log('axios TEST');

// ES5 방식의 모듈 불러오기로 axios로 데이터 넘긴 걸 확인 가능
const axios = require('axios').default;

axios
  .get('https://yts.mx/api/v2/list_movies.json')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
