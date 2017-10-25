import { FOLLOW_TOPIC, UNFOLLOW_TOPIC, FOLLOW_ALL_TOPICS } from './actions';

export default (state = [], { type, data }) => {
  switch (type) {
    case FOLLOW_TOPIC: {
      // console.log('data', data);
      // console.log('state', state);
      const copy = state.slice();
      copy.push({
        description: data.description,
        id: data.id,
        isFollowing: true,
        name: data.name,
      });

      return copy;
      // return [...state, ...data];
    }
    case UNFOLLOW_TOPIC: {
      const copy = state.slice();

      for (let i = 0; i < copy.length; i += 1) {
        if (copy[i].id === data.id) {
          copy.splice(i, 1);
          break;
        }
      }
      return copy;
    }
    case FOLLOW_ALL_TOPICS: {
      const processedData = data.data.map((item) => {
        item.isFollowing = true;
        return item;
      });
      return processedData;
    }
    default: {
      return state;
    }
  }
};
