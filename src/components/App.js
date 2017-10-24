import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Articles from './ArticlesList';
import store from '../reducers/store';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Articles} />
        {/* <Route exact path='/topics' component={Topics}> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);
