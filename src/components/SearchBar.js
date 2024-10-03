import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
        <input
      type="text"
      placeholder="Search by title, author, or genre..."
      value={searchTerm}
      onChange={handleSearch}
    />
    <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
