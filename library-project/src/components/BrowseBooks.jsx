

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './BrowseBooks.css'

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("title"); 


  const filteredBooks = books.filter((book) => 
    (category ? book.category.toLowerCase() === category.toLowerCase() : true) && 
    (searchBy === "title"
      ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
      : book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  return (
    <div>
      <h1>Browse Books</h1>

  
      <label>
        Search by: 
        <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </label>


      <input
        type="text"
        placeholder={`Search by ${searchBy}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredBooks.map((book) => (
         <li key={book.id} className="book-item">
         <img src={book.image} alt={book.title} className="book-image" />
         <div className="book-info">
           <h3>{book.title}</h3>
           <p>by {book.author}</p>
           <Link to={`/books/${book.id}`}>
             <button>View Details</button> 
           </Link>
         </div>
       </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
