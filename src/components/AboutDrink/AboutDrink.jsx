import React from 'react';
import './AboutDrink.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const AboutDrink = (db) => {
  const data = db.coffee;

  const url = window.location.href;
  const regex = /\/about\/id=(\d+)/;
  const match = url.match(regex);
  const id = match[1];

  const drink = data[id];

  return (
    <div className="about">
      <h2 className="aboutName">{drink.name}</h2>
      <img src={drink.image} alt={drink.name} className="aboutImg" />
      <h3 className="aboutTitle">Ингредиенты</h3>
      <ul className="aboutIngrList">
        {drink.ingredients.map((ingredient) => (
          <li className="aboutIngredient">{ingredient}</li>
        ))}
      </ul>
      <h3 className="aboutTitle">Приготовление</h3>
      <div className="aboutText">{drink.description}</div>
      <Link to="/" className="text-link">
        <Button className="redBtn">Назад</Button>
      </Link>
    </div>
  );
};

export default AboutDrink;
