import React from 'react';
import Button from '../Button/Button';

import './CoffeeItems.css';
const CoffeeItems = () => {
  return (
    <div className="coffeeItems">
      <h4 className="coffeeItems_category">Кофе☕</h4>
      <div className="coffeeItems_wrapper">
        <Button className="coffeeItem">Лавандовый раф</Button>
        <Button className="coffeeItem">Лимонный раф</Button>
        <Button className="coffeeItem">Кокосовый раф</Button>
        <Button className="coffeeItem">Лавандовый раф</Button>
        <Button className="coffeeItem">Лимонный раф</Button>
        <Button className="coffeeItem">Кокосовый раф</Button>
      </div>
    </div>
  );
};

export default CoffeeItems;
