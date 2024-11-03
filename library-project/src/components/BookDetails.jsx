
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './BookDetails.css'

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="bookDetails">
      <h2>{book.title}</h2>
      <img src={book.image} alt={`${book.title} cover`} width={'200px'} className="bookImage" /> {/* Book cover image */}
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <Link to="/browse">Back to Browse Books</Link>
    </div>
  );
};

export default BookDetails;
