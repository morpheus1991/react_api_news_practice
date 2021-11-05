import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem, { NewsItems, ArticleItem } from './NewsItem';
import usePromise from '../lib/usePromise';
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

interface NewsListProps {
  category: string;
}
const NewsList = ({ category }: NewsListProps) => {
  const articlesInit = null;
  const [articles, setArticles] = useState<NewsItems>(articlesInit);
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2ba116003cd44bee95106e51052cf147`,
    );
  }, [category]);

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
