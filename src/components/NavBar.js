import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class NavBar extends Component {
//   constructor() {
//     super();
//   }

//   render() {

//   }
// }
const NavBar = () => (
  <nav>
    <ul className="nav-list">
      {/* eslint-disable */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      {/* eslint-enable */}
    </ul>
  </nav>
);

export default NavBar;
