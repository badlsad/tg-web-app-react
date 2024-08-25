import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CoffeeItems from './components/CoffeeItems/CoffeeItems';
import AboutDrink from './components/AboutDrink/AboutDrink';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<CoffeeItems />} />
          <Route path="/about/:id" element={<AboutDrink />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
