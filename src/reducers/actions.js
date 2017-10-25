export const REQUEST_API_ARTICLES = 'REQUEST_API_ARTICLES';
export const RECEIVE_API_ARTICLES = 'RECEIVE_API_ARTICLES';
export const REQUEST_API_TOPICS = 'REQUEST_API_TOPICS';
export const RECIEVE_API_TOPICS = 'RECIEVE_API_TOPICS';

export const FOLLOW_TOPIC = 'FOLLOW_TOPIC';
export const UNFOLLOW_TOPIC = 'UNFOLLOW_TOPIC';
export const FOLLOW_ALL_TOPICS = 'FOLLOW_ALL_TOPICS';

export const followTopic = topic => (
  {
    type: FOLLOW_TOPIC,
    data: topic,
  }
);

export const unfollowTopic = topic => {
  // console.log('topic', topic);
  return (
    {
      type: UNFOLLOW_TOPIC,
      data: topic,
    }
  );
}

export const followAllTopics = data => ({ type: FOLLOW_ALL_TOPICS, data });

export const requestApiArticles = () => ({ type: REQUEST_API_ARTICLES });
export const receiveApiArticles = data => ({ type: RECEIVE_API_ARTICLES, data });


// export const requestApiTopics = () => ({ type: REQUEST_API_TOPICS });
export const requestApiTopics = () => {
  console.log('requesting topics');
  return {
    type: REQUEST_API_TOPICS,
  };
};

export const recieveApiTopics = data => ({ type: RECIEVE_API_TOPICS, data });
