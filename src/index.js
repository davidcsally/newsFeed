import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
/* eslint-disable */ // shhh eslint, webpack is bundling this
import styles from './css/style.css';
/* eslint-enable */

ReactDOM.render(<App />, document.getElementById('root'));
