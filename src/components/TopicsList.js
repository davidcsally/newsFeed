import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestApiTopics } from '../reducers/actions';
import TopicItem from './TopicItem';

/** TopicList.js
 *
 * Container for Topic items. This list is subscribed to 
 */
class TopicsList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="topics-list">
        <h4>Topics</h4>
        {this.props.topics.map(topic => (
          <TopicItem key={topic.id} {...topic} />
        ))}
      </div>
    );
  }
}

TopicsList.propTypes = {
  topics: PropTypes.array.isRequired,
  requestApiTopics: PropTypes.func.isRequired,
};

export default connect(
  state => ({ topics: state.topics }),
  { requestApiTopics },
)(TopicsList);
