
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/store';
import './AddBook.css'

const AddBook = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      image,
      title,
      author,
      description,
      rating: parseFloat(rating),
      category,
    };
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" placeholder="image" value={image} onChange={(e) => setImage(e.target.value)} required />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
