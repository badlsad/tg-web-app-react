import './App.css';
import { useEffect } from 'react';

import Header from './components/Header/Header';
import CoffeeItems from './components/CoffeeItems/CoffeeItems';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <CoffeeItems />
    </div>
  );
}

export default App;
