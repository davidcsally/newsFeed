import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_SINGLE_ARTICLE, REQUEST_API_ARTICLES, receiveApiArticles, REQUEST_API_TOPICS, recieveApiTopics, followAllTopics, recieveSingleArticle } from '../reducers/actions';
import { fetchArticles, fetchTopics, fetchSingleArticle } from '../API/ApiMethods';

function* getApiArticles(action) {
  try {
    // do api call
    const data = yield call(fetchArticles);
    yield put(receiveApiArticles(data));
  }
  catch (e) {
    console.log('error: ', e);
  }
}

function* getApiTopics(action) {
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
    console.log('Error: ', e);
  }
}

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
