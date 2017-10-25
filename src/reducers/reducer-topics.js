import { RECIEVE_API_TOPICS, FOLLOW_TOPIC, UNFOLLOW_TOPIC, FOLLOW_ALL_TOPICS } from './actions';

export default (state = [], { type, data }) => {
  switch (type) {
    case RECIEVE_API_TOPICS:
      return data.data;

    case FOLLOW_ALL_TOPICS: {
      const processedData = data.data.map((item) => {
        item.isFollowing = true;
        return item;
      });
      return processedData;
    }

    case FOLLOW_TOPIC: {
      const copy = state.slice();
      for (let i = 0; i < copy.length; i += 1) {
        if (copy[i].id === data.id) {
          copy[i].isFollowing = true;
          break;
        }
      }

      return copy;
    }

    case UNFOLLOW_TOPIC: {
      const copy = state.slice();
      for (let i = 0; i < copy.length; i += 1) {
        if (copy[i].id === data.id) {
          copy[i].isFollowing = false;
          break;
        }
      }

      return copy;
    }

    default:
      return state;
  }
};
