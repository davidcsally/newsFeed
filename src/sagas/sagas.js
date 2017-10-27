import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchArticles, fetchTopics, fetchSingleArticle } from '../API/ApiMethods';
// import { REQUEST_SINGLE_ARTICLE, REQUEST_API_ARTICLES, receiveApiArticles, REQUEST_API_TOPICS, recieveApiTopics, followAllTopics, recieveSingleArticle } from '../reducers/actions';
import {
  followAllTopics,
  recieveApiTopics,
  receiveApiArticles,
  recieveSingleArticle,
} from '../reducers/action-creators';

import {
  REQUEST_API_TOPICS,
  REQUEST_API_ARTICLES,
  REQUEST_SINGLE_ARTICLE,
} from '../reducers/constants';

/** fetch articles from API, then put data in store */
function* getApiArticles() {
  try {
    // do api call
    const data = yield call(fetchArticles);
    yield put(receiveApiArticles(data));
  }
  catch (e) {
    console.log('[getApiArticles] Error: ', e);
  }
}

/** fetch topics from API, then put data in store */
function* getApiTopics() {
  let initialFetch = true;
  try {
    const data = yield call(fetchTopics);
    yield put(recieveApiTopics(data));

    if (initialFetch === true) {
      initialFetch = false;
      yield put(followAllTopics(data));
    }
  }
  catch (e) {
    console.log('[getApiTopics] Error: ', e);
  }
}

/** fetch article from API, then put data in store */
function* getSingleArticle(action) {
  try {
    const data = yield call(fetchSingleArticle, action.data);
    yield put(recieveSingleArticle(data));
  }
  catch (e) {
    console.log('[getSingleArticle] Error: ', e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_ARTICLES, getApiArticles);
  yield takeLatest(REQUEST_API_TOPICS, getApiTopics);
  yield takeLatest(REQUEST_SINGLE_ARTICLE, getSingleArticle);
}
