import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticlesList from './ArticlesList';
import TopicsList from './TopicsList';
import store from '../reducers/store';
import NavBar from './NavBar';

import { REQUEST_API_ARTICLES, REQUEST_API_TOPICS } from '../reducers/actions';

export default () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ArticlesList} />
            <Route exact path="/topics" component={TopicsList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

store.dispatch({ type: REQUEST_API_ARTICLES });
store.dispatch({ type: REQUEST_API_TOPICS });
