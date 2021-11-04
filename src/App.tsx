import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2ba116003cd44bee95106e51052cf147',
      );
      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NewsList></NewsList>
    </div>
  );
}

export default App;
