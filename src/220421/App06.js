import React from 'react';
import '../App.css';

class App06 extends React.Component {
  state = {
    isLoading: true,
    movies: [],    
  };

  render() {
    // state 객체의 isLoading 요소를 객체 분할 할당방식을 사용하여 isLoading 변수를 선언하고 데이터를 할당
    const { isLoading } = this.state;
    // 변수 isLoading의 데이터 값에 따라 화면에 출력하는 문구를 변경
    return <div>{isLoading ? 'Loading....' : <h1>We are PRISTIN 안녕~ <br/> 나는 우리 집의 Princess <br/> 아야야야 <br/> 모험을 좋아해 <br/> 아야야야 Whoo~~ <br/> </h1>}</div>;
  }

//  render() 메서드가 실행된 후 componentDidMount()가 실행됨 
  componentDidMount() {
    //  setTimeout() : 1회용 타이머, 5초 후 로딩이 끝나는 형태로 프로그램 실행
    //               └ 5초 후 state 객체의 요소인 isLoading의 값을 false로 변경
    //  setInterval() :
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
}

export default App06;


// 문제 2) state 객체에 변수를 추가하여 해당 변수의 값을 1초마다 확인 → 해당 변수의 값이 0이 될 때 화면에 출력하는 글자는 We Are Ready!! 로 변경하는 프로그램을 작성
// 참고 1) 로딩 중일때는 Loading... x 로 화면에 글자를 출력. (x는 숫자)
// 참고 2) 
