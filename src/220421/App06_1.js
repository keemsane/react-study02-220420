// 실습~~~
// 문제 2) state 객체에 변수를 추가하여 해당 변수의 값을 1초마다 확인 → 해당 변수의 값이 0이 될 때 화면에 출력하는 글자는 We Are Ready!! 로 변경하는 프로그램을 작성
// 참고 1) 로딩 중일때는 Loading... x 로 화면에 글자를 출력. (x는 숫자)
// 참고 2) setInterval()을 사용하거나 
// 참고 3) componentDidMount() 말고 Update끝나고 실행시키는 componenetDidUpdate()를 사용.

// 풀이 1 (정석)) componentDidMount()와 componentDidUpdate() 함수를 이용하여 푸는 방식
// componentDidMount() 가 실행되면 setTimeout()을 사용해 1초 후에 state.count의 값을 1 감소 시킴
// state 의 값이 변경됐기 때문에 Updating 상태로 변경돼 리액트가 화면 재구성
// 화면이 업데이트 완료되면 componentDidUpdate() 함수가 실행됨
// componentDidUpdate() 함수에서 setTimeout()을 사용하여 1초 후에 if (state.count > 0) 을 확인함
// 조건이 참이면 state.count - 1을 실행
// 조건이 거짓이면 state.isLoading 의 값을 false로 변경
// 조건이 참이든 거짓이든 state의 상태가 변경됐기 때문에 Updating 상태가 돼 리액트가 화면을 재구성
// 즉, state.count가 0이 될 때까지 화면을 계속 재구성

// 풀이 2) componentDidMount()에서 setInterval() 써서 매 초 if (state.count > 0) 을 확인
// 조건이 참이면 state.count - 1 을 실행 (state.count = 0 까지 실행)
// 조건이 거짓이면 state.isLoading의 값을 false로 변경
// state.count 의 값이 0이 되면 setInterval을 정지시킴

import React from "react";
import '../App.css';

class App06_1 extends React.Component {
    state = {
      isLoading: true,
      count : 10,
      movies: [],    
    };

    render() {
      // state 객체의 isLoading 요소를 객체 분할 할당방식을 사용하여 isLoading 변수를 선언하고 데이터를 할당
      const { isLoading, count } = this.state;
      
      // 변수 isLoading의 데이터 값에 따라 화면에 출력하는 문구를 변경
    //   if (this.state = true) {
    //     return (
    //         <div>
    //             <div>Loading.... 
                    
    //                 </div>
    //         </div>
    //         );
    //   } else {
    //       return (
    //         <h1>We Are READY!!</h1>
    //       );
    //   }

        return <div>{isLoading ? `Loading.... ${count}` : 'We Are READY!!'}</div>;
      
    }
  

  //  render() 메서드가 실행된 후 componentDidMount()가 실행됨 
    // componentDidMount() {
      
    //   setInterval((current) => {
    //     this.countDown((current) => ({ count : current.count - 1}));
    //   }, 1000); 
    //   setTimeout(() => {
    //     this.setState({ isLoading: false });
    //   }, 10000);
    // }

    componentDidMount() {
        setTimeout(() => {
            // this.setState({ isLoading: false });
            this.setState({ count : this.state.count - 1});
        }, 1000);
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.count > 0) {
                this.setState({ count : this.state.count - 1});
            } else {
                this.setState({ isLoading : false });
            }            
        }, 1000);
    }
  }

export default App06_1;