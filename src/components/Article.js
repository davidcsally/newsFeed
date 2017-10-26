import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestSingleArticle, clearSelectedArticle } from '../reducers/actions';

/**
 * Article.js
 *
 * Displays a detailed, single article.
 * Component is SUBSCRIBED to Redux's 'selected' object and updates when GET req completes
 * Props:
 *  @param {Func} requestSingleArticle - dispatch to request & save article to store
 *  @param {Func} clearSelectedArticle - dispatch to remove article when view is unmounted
 *  @param {Object} selected - Store object holding article data
 *  @param {Int} id - article ID, for REST call, comes through in router: 'match.params'
 */
class Article extends React.Component {
  // GET article on mount
  componentWillMount() {
    /* eslint-disable */
    const id = this.props.match.params.id;
    /* eslint-enable */
    this.props.requestSingleArticle(id);
  }

  // Remove article on mount, so that previous article
  // does not show up when next article is selected
  componentWillUnmount() {
    this.props.clearSelectedArticle();
  }

  render() {
    // if article was retrieved, display article, else say loading
    if (Object.keys(this.props.selected).length > 0) {
      const selectedArticle = this.props.selected;

      // extract all images
      const images = this.props.selected.media.map(image => (
        <img src={image.url} alt="alt text" key={image.id} />
      ));

      // get rid of all <p> tags
      const body = selectedArticle.body.replace(/<p>/g, '').replace(/<\/p>/g, '');

      // render article
      return (
        <article className="news-item">
          {images}
          <h3>{selectedArticle.title}</h3>
          <h6>{selectedArticle.attribution.displayName}</h6>
          <p>{body}</p>
          <a href={selectedArticle.url}>Source</a>
        </article >
      );
    }

    // Loading screen while GET request is working
    return (
      <div>LOADING...</div>
    );
  }
}

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  requestSingleArticle: PropTypes.func.isRequired,
  clearSelectedArticle: PropTypes.func.isRequired,

  /* eslint-disable*/ // object too finicky
  selected: PropTypes.object,
  /* eslint-enable */
};

Article.defaultProps = {
  selected: {},
};

export default connect(
  state => ({ selected: state.selected }),
  { requestSingleArticle, clearSelectedArticle },
)(Article);
