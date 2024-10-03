import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../services/booksData';
import { useLibrary } from '../context/LibraryContext';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));
  const { dispatch } = useLibrary();

  const handleAddToLibrary = () => {
    dispatch({ type: 'ADD_BOOK', book });
  };

  if (!book) return <p>Book not found</p>;

  return (
    <div className="book-details-container">
      <h1 className="book-details-title">{book.title}</h1>
      <div className="book-details-info">
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Publication Year:</strong> {book.publication_year}</p>
      </div>
      <button
        className="add-to-library-button"
        onClick={handleAddToLibrary}
      >
        Add to My Library
      </button>
    </div>
  );
};

export default BookDetailsPage;
