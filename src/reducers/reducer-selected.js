import { RECIEVE_SINGLE_ARTICLE, CLEAR_SELECTED_ARTICLE } from './actions';

/**
 *  Selected Article Reducer
 *
 * -Recieve article (from GET)
 * -Clear article (so that wrong article is never shown)
 */
export default (state = {}, { type, data }) => {
  switch (type) {
    case RECIEVE_SINGLE_ARTICLE: {
      const newData = data.data[0];
      return { ...newData };
    }

    case CLEAR_SELECTED_ARTICLE: {
      return {};
    }

    default: {
      return state;
    }
  }
};
