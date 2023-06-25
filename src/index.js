import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BalanceProvider from './contexts/balanceContext';

import Home from './pages/home';
import Blackjack from './pages/blackjack';
import Poker from './pages/poker';
import About from './pages/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BalanceProvider>
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/blackjack" Component={Blackjack}/>
        <Route path="/poker" Component={Poker}/>
        <Route path="/about" Component={About}/>
      </Routes>
    </Router>
  </BalanceProvider>
);
