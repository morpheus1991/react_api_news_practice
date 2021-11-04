import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem, { NewsItems, ArticleItem } from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 738px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = () => {
  const articlesInit = null;
  const [articles, setArticles] = useState<NewsItems>(articlesInit);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2ba116003cd44bee95106e51052cf147',
        );
        if (response.data.articles) {
          setArticles(response.data.articles);
        }
      } catch (error) {
        console.log(error);
      }
      setLoding(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <div>
      <NewsListBlock>
        {articles.map((article: ArticleItem) => (
          <NewsItem key={article.url} article={article}></NewsItem>
        ))}
      </NewsListBlock>
    </div>
  );
};
export default NewsList;
