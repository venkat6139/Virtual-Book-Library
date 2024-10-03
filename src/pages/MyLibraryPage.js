import React from 'react';
import { useLibrary } from '../context/LibraryContext';

const MyLibraryPage = () => {
  const { library, dispatch } = useLibrary();

  const handleRemoveFromLibrary = (id) => {
    dispatch({ type: 'REMOVE_BOOK', id });
  };

  if (library.length === 0) {
    return <p className='empty-library-message'>Your library is empty.</p>;
  }

  return (
    <div className="library-container">
      <h1 className="library-title">My Library</h1>
      <div className="library-grid">
        {library.map((book) => (
          <div key={book.id} className="book-card1">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromLibrary(book.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibraryPage;
