import './NavBar.css'

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1>My Library</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/browse">Browse Books</Link></li>
      <li><Link to="/add">Add Book</Link></li>
    </ul>
  </nav>
);

export default NavBar;
