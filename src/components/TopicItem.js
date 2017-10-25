import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { followTopic, unfollowTopic } from '../reducers/actions';

const TopicItem = (props) => {
  if (props.isFollowing) {
    return (
      <div className="topic-item">
        {props.name}
        <button type="button" className="btn btn-primary"  onClick={() => props.unfollowTopic(props)}>✅ Following</button>
      </div>
    );
  }
  return (
    <div className="topic-item">
      {props.name}
      <button type="button" className="btn btn-primary" onClick={() => props.followTopic(props)}>+ Follow</button>
    </div>
  );
};

TopicItem.propTypes = {
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export default connect(
  state => ({ topics: state.topics }),
  { followTopic, unfollowTopic },
)(TopicItem);
