import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <section className="id-card">
      <img src={picture} alt={firstName} />
      <div className="id-card-data">
        <p>
          <strong>First name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}m
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toDateString()}
        </p>
      </div>
    </section>
  );
};

export default IdCard;
