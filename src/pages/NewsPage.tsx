import React from 'react';
import { useRouteMatch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
type Match = {
  match: {
    params: {
      category: string;
    };
  };
};
const NewsPage: React.FC<Match> = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <div>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
};

export default NewsPage;
