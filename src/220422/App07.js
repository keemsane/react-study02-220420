import React from 'react';
import '../App.css';
import axios from 'axios';

class App07 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading } = this.state;
    // 변수 isLoading의 데이터 값에 따라 화면에 출력하는 문구를 변경
    return <div>{isLoading ? 'Loading....' : 'We are READY!!'}</div>;
  }

  // async : 비동기 방식임을 알려줌
  // await : 비동기 로직이 끝날때까지 기다려줌

  //   async / await
  // 비동기 로직을 처리하기 위한 최신 방법
  // ES2017 버전부터 추가된 새로운 비동기 로직 처리 방식

  // 사용법
  // async function 함수명() { await 비동기 처리 메서드명(); }
  // async 키워드 사용 시 해당 함수 안에 비동기 처리가 필요한 메서드가 있음을 알려줌.
  // await 키워드 사용 시 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다림.

//   getMovies = async function () {
//     await axios.get('주소');
//   }
//   ↑ 원래 모양
  getMovies = async () => {
    try {
      // ES6 객체 분해 할당
      // 좌변에 let, var, const {변수명}
      //  아래에 3단계를 거침
      //   var { data } = await axios.get('https://yts.mx/api/v2/list_movies.json');
      //   console.log(data);
      //   var { data } = data;
      //   console.log(data);
      //   const { movies } = data;
      //   console.log(movies);

      //   이걸 한 번에 하는 방법
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts.mx/api/v2/list_movies.json');
      console.log(movies);
      //   가지고 온 movies 데이터를 movies[] 배열에 setState로 넣어줌.
      this.setState({ movies: movies, isLoading: false });

      // ES5방식
      //   const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
      //   console.log('CONNECT SUCCESS');
      // console.log(movies);
      //   console.log(movies.data.data.movies);

      // 앞의 movies는 위에 state에서 선언한 배열 (ES5 방식)
      // this.setState({ movies: movies.data.data.movies, isLoading: false });
    } catch (error) {
      console.log('!ERROR ALERT! !ERROR ALERT! !ERROR ALERT!');
      console.log(error);
    }
  };

  // 원래는 이렇게 axios를 사용해야 함~
  // 기존 방식은 아래와 같고, async, await 써도 같음~
  //   getMovies = () => {
  //     axios.get('https://yts.mx/api/v2/list_movies.json').then((response) => {
  //         console.log('CONNECT SUCCESS');
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //         console.log('Error ALERT');
  //         console.log(error);
  //     });
  //   };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getMovies();
  }
}

export default App07;
