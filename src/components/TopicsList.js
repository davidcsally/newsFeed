import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestApiTopics } from '../reducers/actions';
import TopicItem from './TopicItem';

class TopicsList extends Component {
  constructor() {
    super();
    console.log('# TopicsList Loading');
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
  state => ({ topics: state.topics, following: state.following }),
  { requestApiTopics },
)(TopicsList);
