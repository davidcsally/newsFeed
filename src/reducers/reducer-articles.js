import { RECEIVE_API_ARTICLES } from './actions';

export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_API_ARTICLES:
      return data.data;
    default:
      return state;
  }
};
