import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tag from './Tag';

/** Formats date strings into format: 'Jan 1 2017'
 * @param {string} dateString - a JS date in the form of a string
 * @returns {Date} - returns a formatted Date
*/
const dateFormatter = dateString => new Date(dateString)
  .toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

/**
 * NewsItem.js
 *
 * Component to represent each article in feed
 *  Props:
 *  @param {String} title - Title of article
 *  @param {String} publisher - Organization behind article
 *  @param {Date} createdAt - Article date, as a date string
 *  @param {String} summary - Article Summary
 *  @param {Array[Objects]} topics - Array of article tags
 *
 */
const NewsItem = (props) => {
  const date = dateFormatter(props.createdAt);
  const tags = props.topics.map(a => <Tag key={a.id} name={a.name} />);

  return (
    <article className="news-item">
      <h3>{props.title}</h3>
      <h6>{props.attribution.displayName}</h6>
      <p>{date}</p>
      {/* eslint-disable */} {/* eslint doesn't like <Link> ¯\_(ツ)_/¯ */}
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
          <i className="fa fa-comment" aria-hidden="true" />
          <p className="likes-count">Comment</p>
        </button>

        <button className="social-btn">
          <i className="fa fa-share" aria-hidden="true" />
          <p className="likes-count">Share</p>
        </button>

        <button className="social-btn">
          <i className="fa fa-save" aria-hidden="true" />
          <p className="likes-count">Save</p>
        </button>
      </div>
    </article >
  );
};

NewsItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  attribution: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    publisher: PropTypes.string,
  }).isRequired,

  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default NewsItem;

