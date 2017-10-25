import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { followTopic, unfollowTopic } from '../reducers/actions';

/**
 * TopicItem.js
 *
 * Each Topic Item represents one topic that the user can follow.
 * Topic items are subscribed to an array of followed topics
 * Props:
 *  @param {String} name - Topic Name
 *  @param {Bool} isFollowing - Flag if user is / is not following
 *  @param {Func} followTopic - Dispatch event to follow topic
 *  @param {Func} unfollowTopic - Dispatch event to unfollow topic
 *
 */
const TopicItem = (props) => {
  // If following, show unfollow button
  if (props.isFollowing) {
    return (
      <div className="topic-item">
        {props.name}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.unfollowTopic(props)}
        >✓  Following
        </button>
      </div>
    );
  }
  // If not following, show follow button
  return (
    <div className="topic-item">
      {props.name}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.followTopic(props)}
      >+ Follow
      </button>
    </div>
  );
};

TopicItem.propTypes = {
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  followTopic: PropTypes.func.isRequired,
  unfollowTopic: PropTypes.func.isRequired,
};

export default connect(
  state => ({ topics: state.topics }),
  { followTopic, unfollowTopic },
)(TopicItem);
