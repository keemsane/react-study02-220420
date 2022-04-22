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

  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(movies);
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getMovies();
  }
}

export default App07;
