import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
