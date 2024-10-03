import React from 'react';

const BookCard = ({ book, onSelect, onAddToLibrary }) => {
  return (
    <div className="book-card" onClick={() => onSelect(book.id)}>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={(e) => { 
        e.stopPropagation(); 
        onAddToLibrary(book); 
      }}>
        Add to My Library
      </button>
    </div>
  );
};

export default BookCard;
