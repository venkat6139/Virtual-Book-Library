import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onSelect, onAddToLibrary }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onSelect={onSelect} 
          onAddToLibrary={onAddToLibrary} 
        />
      ))}
    </div>
  );
};

export default BookList;
