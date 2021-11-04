import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Categories onSelect={onSelect} category={category}></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
}

export default App;
