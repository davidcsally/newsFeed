import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestApiArticles } from '../reducers/actions';
import NewsItem from './NewsItem';

class ArticlesList extends Component {
  constructor() {
    super();
    console.log('# ArticlesList loaded');
  }

  render() {
    const followedTopics = [];
    const keys = Object.keys(this.props.topics);
    keys.forEach((key) => {
      const topic = this.props.topics[key];
      if (topic.isFollowing) followedTopics.push(topic.name);
    });

    return (
      <div className="articles-list">
        articles list
        {this.props.articles.map((article) => {
          for (let i = 0; i < article.topics.length; i += 1) {
            if (followedTopics.includes(article.topics[i].name)) {
              return <NewsItem key={article.id} {...article} />;
            }
          }
        })
      }
      </div>
    );
  }
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  requestApiArticles: PropTypes.func.isRequired,
};

export default connect(
  state => ({ articles: state.articles, topics: state.topics }),
  { requestApiArticles },
)(ArticlesList);

// <NewsItem key={article.id} {...article} />)}
