import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Tag from './Tag';
/** Component to represent each item in News Feed
 *
 * Each item contains a
 * -title
 * -publisher
 * -date
 * -5 line summary
 * -tags
 */

function dateFormatter(string) {
  return new Date(string).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const NewsItem = (props) => {
  const date = dateFormatter(props.createdAt);
  const tags = props.topics.map(a => <Tag key={a.id} name={a.name} />);

  return (
    <article className="news-item">
      <h3>{props.title}</h3>
      <h6>{props.attribution.displayName}</h6>
      <p>{date}</p>
      {/* eslint-disable */}
      <p>{props.summary}...  <Link to={`/articles/${props.id}`}>Read More</Link></p>
      {/* eslint-enable */}
      {<div>{tags}</div>}
      <hr />
      <div className="social">
        <button className="social-btn">
          <i className="fa fa-thumbs-up" aria-hidden="true" />
          <p className="likes-count">{props.likesCount} Likes</p>
        </button>

        <button className="social-btn">
          <i className="fa fa-comment" aria-hidden="true"></i>
          <p className="likes-count">Comment</p>
        </button>

        <button className="social-btn">
          <i className="fa fa-share" aria-hidden="true"></i>
          <p className="likes-count">Share</p>
        </button>

        <button className="social-btn">
          <i className="fa fa-save" aria-hidden="true"></i>
          <p className="likes-count">Save</p>
        </button>

      </div>

    </article >
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  attribution: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    publisher: PropTypes.string,
  }).isRequired,
};

export default NewsItem;

