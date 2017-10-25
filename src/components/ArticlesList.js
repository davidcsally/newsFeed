import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestApiArticles } from '../reducers/actions';
import NewsItem from './NewsItem';

const ArticlesList = (props) => {
  const followedTopics = [];
  const keys = Object.keys(props.topics);
  keys.forEach((key) => {
    const topic = props.topics[key];
    if (topic.isFollowing) followedTopics.push(topic.name);
  });

  const followedArticles = props.articles.map((article) => {
    for (let i = 0; i < article.topics.length; i += 1) {
      if (followedTopics.includes(article.topics[i].name)) {
        return <NewsItem key={article.id} {...article} />;
      }
    }
  });

  return (
    <div className="articles-list">
      {followedArticles}
    </div>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(state => ({ articles: state.articles, topics: state.topics }))(ArticlesList);
