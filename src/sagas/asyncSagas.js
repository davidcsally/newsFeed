// import { takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_ARTICLES, receiveApiArticles, REQUEST_API_TOPICS, recieveApiTopics, followAllTopics } from '../reducers/actions';
import { fetchArticles, fetchTopics } from './API';


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
  console.log('# getAPITopics');
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

export default function* mySaga() {
  yield takeLatest(REQUEST_API_ARTICLES, getApiArticles);
  yield takeLatest(REQUEST_API_TOPICS, getApiTopics);
}
