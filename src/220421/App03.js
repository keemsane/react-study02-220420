import React from "react";
import "../../src/App.css";

// class 형 컴포넌트 사용하기
// class 키워드를 사용해 js 클래스 생성 
// → extends를 사용해 React.Component를 상속받아 class형 컴포넌트를 생성

// 사용법
// class 클래스명 extends React.Component

class App03 extends React.Component {
    render() {
        return (
            <div>
                <h1>클래스형 컴포넌트 사용하기</h1>
            </div>

        );
    }
}

export default App03;