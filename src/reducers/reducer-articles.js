import { RECEIVE_API_ARTICLES } from './constants';

/**
 * Article Reducer
 *
 * -Recieve articles (fromGet)... and that's about it!
 */
export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_API_ARTICLES: {
      return data.data;
    }

    default: {
      return state;
    }
  }
};
