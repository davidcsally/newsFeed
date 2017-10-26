import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Article from './Article';
import store from '../reducers/store';
import TopicsList from './TopicsList';
import ArticlesList from './ArticlesList';
import { REQUEST_API_ARTICLES, REQUEST_API_TOPICS } from '../reducers/actions';

/**
 * App.js
 *
 * Application shell. Fires off requests on load to GET all articles and topics
 * Contains three main routes:
 *  -List of Articles
 *  -List of Topics
 *  -Single Article
 */
export default () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="main">
            <Switch>
              <Route exact path="/" component={ArticlesList} />
              <Route exact path="/topics" component={TopicsList} />
              <Route path="/articles/:id" component={Article} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

// when App loads, fetch data
store.dispatch({ type: REQUEST_API_ARTICLES });
store.dispatch({ type: REQUEST_API_TOPICS });
