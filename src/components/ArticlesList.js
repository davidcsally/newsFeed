import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsItem from './NewsItem';

const ArticlesList = (props) => {
  // extract followed topics
  const values = Object.values(props.topics);
  const followedTopics = values
    .map((val) => {
      if (val.isFollowing === true) return val.name;
    }) // remove holes in array (left by map)
    .filter((elem) => {
      if (elem) return elem;
    });

  // build list of articles to display, by filtering through followed topics
  const followedArticles = props.articles
    .map((article) => {
      for (let i = 0; i < article.topics.length; i += 1) {
        if (followedTopics.includes(article.topics[i].name)) {
          return <NewsItem key={article.id} {...article} />;
        }
      }
    }) // remove holes in array (left by map)
    .filter((elem) => {
      if (elem) return elem;
    });

  // if there are articles available, display articles
  if (followedArticles.length > 0) {
    return (
      <div className="articles-list">
        {followedArticles}
      </div>
    );
  }

  // if no articles, inform user to follow more topics
  return (
    <div className="articles-list">
      Try following some more topics!
    </div>
  );
};

ArticlesList.propTypes = {
  /* eslint-disable */
  articles: PropTypes.array.isRequired,
  /* eslint-enable */
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(state => ({ articles: state.articles, topics: state.topics }))(ArticlesList);
