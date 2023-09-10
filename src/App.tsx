import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import MainComponentPage from './pages/MainComponentPage/MainComponentPage';
import TrashBasketPage from './pages/TrashBasketPage/TrashBasketPage';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainComponentPage />} />
      </Routes>
      <Routes>
        <Route path="/trashbasket" element={<TrashBasketPage />} />
      </Routes>
    </div>
  );
};

export default App;
