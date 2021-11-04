import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
  }
  img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export interface ArticleItem {
  author: null | string;
  content: null | string;
  description: string;
  publishedAt: string;
  source: { id: null | string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export type NewsItems = ArticleItem[] | null;

const NewsItem = ({ article }: { article: ArticleItem }) => {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
