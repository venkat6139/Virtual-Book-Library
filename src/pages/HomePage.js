import React, { useState } from 'react';
import { books } from '../services/booksData';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

const HomePage = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const { dispatch } = useLibrary();
  const navigate = useNavigate();

  const handleSearch = (term) => {
    const lowercasedTerm = term.toLowerCase();
    setFilteredBooks(
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowercasedTerm) ||
          book.author.toLowerCase().includes(lowercasedTerm) ||
          book.genre.toLowerCase().includes(lowercasedTerm)
      )
    );
  };

  const handleSelectBook = (id) => {
    navigate(`/book/${id}`);
  };

  const handleAddToLibrary = (book) => {
    dispatch({ type: 'ADD_BOOK', book });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} onSelect={handleSelectBook} onAddToLibrary={handleAddToLibrary} />
    </div>
  );
};

export default HomePage;
