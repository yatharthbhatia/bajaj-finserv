import React, { useState } from 'react';

const SearchBar = ({ onSearch, suggestions, onSuggestionClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    onSuggestionClick(name);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" data-testid="search-bar">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search doctors by name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="search-input"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => onSearch(searchTerm)}
          data-testid="search-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul
          className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200"
          data-testid="suggestions-list"
        >
          {suggestions.map((doctor) => (
            <li
              key={doctor.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(doctor.name)}
              data-testid="suggestion-item"
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;