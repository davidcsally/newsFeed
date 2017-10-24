import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.attribution.displayName}</p>
      <p>{date}</p>
      <p>{props.summary}...<form action={props.url}><input type="submit" value="Read More" /></form></p>
      <p></p>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  attribution: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    publisher: PropTypes.string,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsItem;

