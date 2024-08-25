import React from 'react';
import Button from '../Button/Button';

import './CoffeeItems.css';
import { Link } from 'react-router-dom';

const CoffeeItems = (db) => {
  const data = db.coffee;
  return (
    <div className="coffeeItems">
      <h4 className="coffeeItems_category">Кофе☕</h4>
      <div className="coffeeItems_wrapper">
        {data.map((item) => (
          <Link to={`/about/id=${item.id}`} key={item.id} className="text-link">
            <Button className="coffeeItem">{item.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoffeeItems;
