// src/components/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <Link to="/">Go to Home</Link>
  </div>
);

export default NotFound;
