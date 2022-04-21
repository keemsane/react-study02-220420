import React from 'react';
import '../../src/App.css';

// class 형 컴포넌트 사용하기
// class 키워드를 사용해 js 클래스 생성
// → extends를 사용해 React.Component를 상속받아 class형 컴포넌트를 생성

// 사용법
// class 클래스명 extends React.Component

// 리액트의 컴포넌트는 2 가지가 있음 (1. 함수형, 2. 클래스형)
// 원래는 간단한 걸 함수형으로 복잡한 걸 클래스형으로 주로 썼음
// 하지만 리액트 버전이 올라갈수록 두 가지를 혼용하고 있음.
// 현재 버전은 17.x버전
// 15버전 부터 hook이 추가됨.
// 그러면서 함수형나 클래스형이나 큰 차이가 없어짐
// 현업에 가게 됐을 때 리액트를 만나면 기존에 만든 사이트를 유지보수할 일이 많을 것임. 예전 클래스 형으로 만들었을 경우를 대비해 두 방법 모두 알아야 함.

// 1. 함수형 컴포넌트
// 2. 클래스형 컴포넌트

// render() : 클래스형 컴포넌트에서 컴포넌트의 화면을 구성하기 위한 함수, 다른 메서드에서 구현한 화면을 출력하는 메서드라고 보면 됨.
// state : 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 가지고 있는 객체, props와 비슷함.
// └- props와 차이점 :
// props : 상위 컴포넌트에서 하위 컴포넌트로 데이터가 전달됨.
// state : 해당 컴포넌트 내에서 관리됨

class App03 extends React.Component {
  state = {
    count: 10,
  };
// 그냥 this.state.count++; 하면 작동 안함
// setState() : state 객체가 가지고 있는 데이터를 수정하는 함수
// setState(요소명 및 연산식)
  add = () => {
    this.setState({count : this.state.count + 1});
    console.log('Add');
  };

//   화살표 함수 사용하지 않는 경우
//   add = function () {
//     this.setState({count : this.state.count + 1});
//     console.log('Add');
//   };

  minus = () => {
    this.setState({count : this.state.count - 1});
    console.log('Minus');
  };

  reset = () => {
    this.setState({count : this.state.count});
    console.log("RESET");
  };
  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 사용하기</h1>
        <h2>state가 가지고 있는 count 값 : {this.state.count}</h2>
        <button onClick={this.add}> + plus </button>
        <button onClick={this.minus}> - minus </button>
        <button onClick={this.reset}> RESET </button>
      </div>
    );
  }
}

export default App03;
