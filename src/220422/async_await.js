//   async / await
// 비동기 로직을 처리하기 위한 최신 방법
// ES2017 버전부터 추가된 새로운 비동기 로직 처리 방식

// 사용법
// async function 함수명() { await 비동기 처리 메서드명(); }
// async 키워드 사용 시 해당 함수 안에 비동기 처리가 필요한 메서드가 있음을 알려줌.
// await 키워드 사용 시 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다림.

// ※ 아래 코드는 설명을 위한 예시이므로 동작하지 않습니다 ※
const axios = require('axios').default;

// 비동기 방식을 사용하지 않았을 경우
// 정상적인 동작은 되지 않음
// 하지만 프로그램의 흐름을 파악하기는 쉬움
function logName(userId) {
  var login = axios.get('http://localhost:8083?userId=' + userId);
  if (login.auth === 'success') {
    console.log(user.name);
  }
}

// 비동기 방식을 사용했을 경우 (promise)
// 비동기 방식 혹은 콜백 방식에 대한 이해가 있어야 아래와 같은
// 프로그램의 흐름을 파악할 수 있음
function logName(userId) {
  axios.get('http://localhost:8083?userId=' + userId).then((res) => {
    if (res.auth === 'success') {
      console.log(res.name);
    }
  });
}

// async, await 적용
// async, await를 사용하면 콜백에 대한 이해 없이도 프로그램의 흐름을 쉽게 파악할 수 있음.
async function logName(userId) {
    var login = await axios.get('http://localhost:8083?userId=' + userId);

    if (login.auth === 'success') {
      console.log(user.name);
    }
  }

console.log('LOGIN ACTION');
logName('admin');
