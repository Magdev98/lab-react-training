import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div>
      <p class="random-p">
        Random value between {min} and {max} = {getRandom(min, max)}
      </p>
    </div>
  );
};

export default Random;
