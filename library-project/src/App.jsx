
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';
import './App.css'

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browse" element={<BrowseBooks />} />
      <Route path="/browse/:category" element={<BrowseBooks />} />
      <Route path="/books/:id" element={<BookDetails />} /> 
      <Route path="/add" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
