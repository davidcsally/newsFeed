import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul className="navbar">
      {/* eslint-disable */}
      <button type="button" className="btn btn-primary"><Link to="/">Home</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/topics">Topics</Link></button>
      {/* <li><Link to="/">Home</Link></li> */}
      <li>Articles Feed</li>
      {/* <li><Link to="/topics">Topics</Link></li> */}


      {/* eslint-enable */}
    </ul>
  </nav>
);

export default NavBar;
