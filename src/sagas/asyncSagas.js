// import { takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from '../reducers/actions';
import { fetchData } from "./API";


function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  }
  catch (e) {
    console.log('error: ', e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
