import React from 'react';
import './App.css';
import Info from './info01';
import Friends from './address';

// 문제 1) 컴포넌트 info.01.js 파일을 생성
//       → 자신의 간단한 정보를 출력하는 페이지 화면에 출력
// 참고 1) src 폴더 아래에 components01.js 생성
// 참고 2) 이름, 성별, 나이, 이메일, 주소 출력
// 참고 3) UI 구성은 원하는 방식대로 사용

// 문제 2) 친구의 정보를 출력하는 컴포넌트 address.js 파일을 생성
//       → 친구의 간단한 정보를 화면에 출력
// 참고 1) src 폴더 아래에 컴포넌트 생성, address.js
// 참고 2) 이름, 성별, 이메일 출력
// 참고 3) UI 구성은 자유롭게
// 참고 4) 2명 이상 출력
// 참고 5) 친구의 정보를 props를 통해서 하위 컴포넌트로 전달해 출력
function App() {
  return (
    <div>
      <h1>Profile</h1>
      <hr></hr>
      <Info />
      <hr></hr>
      <Friends
        name = "Cheolsoo"
        gender = "MALE"
        email = "FEH2O @ BSN.CO.KR"
      />
      <hr></hr>
      <Friends
        name = "Yoory"
        gender = "FEMALE"
        email = "GLASSLEE @ BSN.CO.KR"
      />
      {/* 여기에 출력하도록 컴포넌트 출력 */}
    </div>
  );
}

export default App;
