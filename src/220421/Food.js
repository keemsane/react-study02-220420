import React from 'react';
import './Food.css';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I LIKE {name}</h2>
      <img className="imgSize" src={picture} alt={name} />
    </div>
  );
}

export default Food;
