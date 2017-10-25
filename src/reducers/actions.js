export const REQUEST_API_ARTICLES = 'REQUEST_API_ARTICLES';
export const RECEIVE_API_ARTICLES = 'RECEIVE_API_ARTICLES';
export const REQUEST_API_TOPICS = 'REQUEST_API_TOPICS';
export const RECIEVE_API_TOPICS = 'RECIEVE_API_TOPICS';

export const FOLLOW_TOPIC = 'FOLLOW_TOPIC';
export const UNFOLLOW_TOPIC = 'UNFOLLOW_TOPIC';
export const FOLLOW_ALL_TOPICS = 'FOLLOW_ALL_TOPICS';

export const CLEAR_SELECTED_ARTICLE = 'CLEAR_SELECTED_ARTICLE';
export const REQUEST_SINGLE_ARTICLE = 'REQUEST_SINGLE_ARTICLE';
export const RECIEVE_SINGLE_ARTICLE = 'RECIEVE_SINGLE_ARTICLE';

export const getSelected = data => ({ type: REQUEST_SINGLE_ARTICLE, data });
export const recieveSingleArticle = data => ({ type: RECIEVE_SINGLE_ARTICLE, data });
export const clearSelectedArticle = () => ({ type: CLEAR_SELECTED_ARTICLE });

export const followTopic = topic => ({ type: FOLLOW_TOPIC, data: topic });
export const unfollowTopic = topic => ({ type: UNFOLLOW_TOPIC, data: topic });
export const followAllTopics = data => ({ type: FOLLOW_ALL_TOPICS, data });

export const requestApiArticles = () => ({ type: REQUEST_API_ARTICLES });
export const receiveApiArticles = data => ({ type: RECEIVE_API_ARTICLES, data });

export const requestApiTopics = () => ({ type: REQUEST_API_TOPICS });
export const recieveApiTopics = data => ({ type: RECIEVE_API_TOPICS, data });
