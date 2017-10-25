import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  console.log('PROPS ID', props.id);
  const date = dateFormatter(props.createdAt);
  const tags = props.topics.map(a => a.name);
  const tagsString = tags.join(', ');

  const detailURL = `/articles/${props.id}`;
  console.log('detailURL', detailURL);

  return (
    <article className="news-item">
      <h3>{props.title}</h3>
      <h6>{props.attribution.displayName}</h6>
      <p>{date}</p>
      {/* eslint-disable */}      
      <p>{props.summary}...<Link to={`/articles/${props.id}`}>Read More</Link></p>
      {/* eslint-enable */}

      {/* <a href={props.url}>Read More</a> */}

      <p>tags: {tagsString}</p>
      <p>likes: {props.likesCount} </p>
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

