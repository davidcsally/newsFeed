import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { followTopic, unfollowTopic } from '../reducers/actions';

const TopicItem = (props) => {
  if (props.isFollowing) {
    return (
      <div>
        {props.name}
        <input type="button" value="Unfollow" onClick={() => props.unfollowTopic(props)} />
      </div>
    );
  }
  return (
    <div>
      {props.name}
      <input type="button" value="Follow" onClick={() => props.followTopic(props)} />
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
