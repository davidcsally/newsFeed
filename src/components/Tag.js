import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tag.js
 *
 * List items corresponding to article categories
 * Props:
 *  @param {String} name - Category name
 */
const Tag = props => (
  <div className="tag-item">
    {props.name}
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
