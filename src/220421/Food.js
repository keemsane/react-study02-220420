import React from 'react';
import './Food.css';
// 전달받은 데이터의 타입을 확인하기 위해서 prop-types 모듈을 로드
import PropTypes from 'prop-types';

/**
 * 음식 데이터를 출력할 컴포넌트
 * @param {*} 음식 이름
 * @returns 내가 좋아하는 음식 이름
 */
function Food({ name, picture }) {
  return (
    <div>
      <h2>I LIKE {name}</h2>
      <img className="imgSize" src={picture} alt={name} />
    </div>
  );
}

export default Food;

// propTypes : 상위 컴포넌트에서 받은 데이터가 하위 컴포넌트에서 원하는 타입의 데이터인지 확인
// isRequired : 필수 속성으로 설정, 해당 데이터가 없을 경우 오류 발생

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
}
