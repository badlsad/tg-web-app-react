import React from 'react';
import Button from '../Button/Button';

import './CoffeeItems.css';
import { Link } from 'react-router-dom';
const CoffeeItems = () => {
  return (
    <div className="coffeeItems">
      <h4 className="coffeeItems_category">Кофе☕</h4>
      <div className="coffeeItems_wrapper">
        <Link to="/about/0">
          <Button className="coffeeItem">Лавандовый раф</Button>
        </Link>
        <Button className="coffeeItem">Лимонный раф</Button>
        <Button className="coffeeItem">Кокосовый раф</Button>
        <Button className="coffeeItem">Латте</Button>
        <Button className="coffeeItem">Капуччино</Button>
        <Button className="coffeeItem">Айс-латте</Button>
      </div>
    </div>
  );
};

export default CoffeeItems;
