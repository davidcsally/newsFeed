import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul className="navbar">
      {/* eslint-disable */}
      <button type="button" className="btn btn-primary"><Link to="/">Home</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/topics">Topics</Link></button>
      <li>Articles Feed</li>
      {/* eslint-enable */}
    </ul>
  </nav>
);

export default NavBar;
