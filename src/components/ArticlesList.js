import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getArticles } from '../reducers/articles-reducer';
import PropTypes from 'prop-types';

import { requestApiData } from '../reducers/actions';
import NewsItem from './NewsItem';

class ArticlesList extends Component {
  constructor() {
    super();
    console.log('# ArticlesList loaded');
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    console.log('props:', this.props);
    setTimeout(() => {
      console.log('props:', this.props);
    }, 4000);

    return (
      <div className="articles-list">
        articles list
        {this.props.articles.map(article =>
          <NewsItem key={article.id} {...article} />)}
      </div>
    );
  }
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  requestApiData: PropTypes.func.isRequired,
};

export default connect(
  state => ({ articles: state.articles }),
  { requestApiData },
)(ArticlesList);
