import { useState, useEffect } from 'react'
import './App.css'

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import DoctorCard from './components/DoctorCard';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    consultationType: '',
    specialties: [],
    sortBy: ''
  });

  const handleSearch = (value) => {
    setSearchTerm(value)
    if (value.trim() === '') {
      setSuggestions([])
      setFilteredDoctors(doctors)
      return
    }

    // Filter suggestions based on doctor names
    const matchedDoctors = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(value.toLowerCase())
    )

    // Show only top 3 suggestions
    setSuggestions(matchedDoctors.slice(0, 3))
    setFilteredDoctors(matchedDoctors)
  }

  const handleSuggestionClick = (doctorName) => {
    setSearchTerm(doctorName)
    setShowSuggestions(false)
    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(doctorName.toLowerCase())
    )
    setFilteredDoctors(filtered)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false)
      const filtered = doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredDoctors(filtered)
    }
  }

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
        />
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map((doctor, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(doctor.name)}
              >
                {doctor.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Doctor list will be rendered here */}
    </div>
  )
}

export default App
