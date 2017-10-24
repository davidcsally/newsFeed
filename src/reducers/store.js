// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import mySaga from '../sagas/asyncSagas';
import ArticlesReducer from './articles-reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// this is the state of each component, all combined into one through CombineReducers
const allReducers = combineReducers({
  articles: ArticlesReducer,
});

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(mySaga);
