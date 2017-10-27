/** actions.js
 *
 * Actions which modify the Redux store
 *
 */
import {
  REQUEST_API_ARTICLES,
  RECEIVE_API_ARTICLES,
  REQUEST_API_TOPICS,
  RECIEVE_API_TOPICS,
  FOLLOW_TOPIC,
  UNFOLLOW_TOPIC,
  FOLLOW_ALL_TOPICS,
  REQUEST_SINGLE_ARTICLE,
  RECIEVE_SINGLE_ARTICLE,
  CLEAR_SELECTED_ARTICLE,
} from './constants';

export const requestApiArticles = () => ({ type: REQUEST_API_ARTICLES });
export const receiveApiArticles = data => ({ type: RECEIVE_API_ARTICLES, data });

export const requestApiTopics = () => ({ type: REQUEST_API_TOPICS });
export const recieveApiTopics = data => ({ type: RECIEVE_API_TOPICS, data });

export const followTopic = topic => ({ type: FOLLOW_TOPIC, data: topic });
export const unfollowTopic = topic => ({ type: UNFOLLOW_TOPIC, data: topic });
export const followAllTopics = data => ({ type: FOLLOW_ALL_TOPICS, data });

export const requestSingleArticle = data => ({ type: REQUEST_SINGLE_ARTICLE, data });
export const recieveSingleArticle = data => ({ type: RECIEVE_SINGLE_ARTICLE, data });
export const clearSelectedArticle = () => ({ type: CLEAR_SELECTED_ARTICLE });

