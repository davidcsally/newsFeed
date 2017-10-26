import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopicItem from './TopicItem';

/** TopicList.js
 *
 * Container for Topic items. This list is SUBSCRIBED to Redux's topics
 * Props:
 *  @param {Array[Objects]} topics - Array of article tags
 */
const TopicsList = props => (
  <div className="topics-list">
    <h4>Topics</h4>
    {props.topics.map(topic => (
      <TopicItem key={topic.id} {...topic} />
    ))}
  </div>
);

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(state => ({ topics: state.topics }))(TopicsList);
