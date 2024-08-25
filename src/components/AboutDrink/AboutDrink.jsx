import React from 'react';
import './AboutDrink.css';
import { Link } from 'react-router-dom';

const AboutDrink = () => {
  return (
    <>
      <div className="name">Lavanda</div>
      <div className="mainText">Lavand is pid</div>
      <Link to="/">Back</Link>
    </>
  );
};

export default AboutDrink;
