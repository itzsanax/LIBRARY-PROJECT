
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css'

const HomePage = () => {
  const books = useSelector((state) => state.books);
  const popularBooks = books.slice(0, 3); 



  return (
    <div>
        <div className='homeBox'>
           <div>
           <h1>Welcome to the My Library</h1>
           <p>Discover a curated selection of books across various genres. Dive into our popular picks or browse by category to find your next favorite read.</p>
            </div> 
           <img src='/icons/online-library.png' alt='lib-icon' />
        </div>
      <div className='categoryBox'>
         <h2>Book Categories</h2>
      <ul>
      <li>
            <Link to="/browse/fiction">Fiction</Link>
          </li>
          <li>
            <Link to="/browse/non-fiction">Non-Fiction</Link>
          </li>
          <li>
            <Link to="/browse/sci-fi">Sci-Fi</Link>
          </li>
      </ul>
      </div>
     
     <div className='popularBox'>
         <h2>Popular Books</h2>
      <ul>
      {popularBooks.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.image} alt={book.title} className="book-image" /> {/* Display book image */}
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
     
    </div>
  );
};

export default HomePage;
