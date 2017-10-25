import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestSingleArticle, clearSelectedArticle } from '../reducers/actions';

class Article extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.requestSingleArticle(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedArticle();
  }

  render() {
    const keys = Object.keys(this.props.selected);
    if (Object.keys(this.props.selected).length > 0) {
      const selectedArticle = this.props.selected;
      // get all images
      const images = this.props.selected.media.map(image => (
        <img src={image.url} alt="alt text" key={image.id} />
      ));

      // get rid of all <p> tags
      const body = selectedArticle.body.replace(/<p>/g, '').replace(/<\/p>/g, '');

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
    return (
      <div>LOADING...</div>
    );
  }
}


// Article.propTypes = {
//   id: PropTypes.number.isRequired,
// };
// export default Article;

export default connect(
  state => ({ selected: state.selected }),
  { requestSingleArticle, clearSelectedArticle },
)(Article);
