import React, { useState, useCallback } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage}></Route>;
}

export default App;
