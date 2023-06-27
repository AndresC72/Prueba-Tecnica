import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Orders from './components/Orders'

const App = () => {
  return (
    <div className="app">
      <Orders />
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
