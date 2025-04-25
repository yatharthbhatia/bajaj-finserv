"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { Doctor } from "@/types/doctor"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  doctors: Doctor[]
}

export default function SearchBar({ searchTerm, onSearchChange, doctors }: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<Doctor[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Update suggestions when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([])
      return
    }

    const filteredDoctors = doctors
      .filter((doctor) => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 3) // Show only top 3 matches

    setSuggestions(filteredDoctors)
  }, [searchTerm, doctors])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onSearchChange(value)
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (doctorName: string) => {
    onSearchChange(doctorName)
    setShowSuggestions(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Symptoms, Doctors, Specialists, Clinics"
          className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          data-testid="autocomplete-input"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg"
        >
          {suggestions.map((doctor, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => handleSuggestionClick(doctor.name)}
              data-testid="suggestion-item"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-3">
                  {doctor.image && (
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <div className="font-medium">{doctor.name}</div>
                  <div className="text-gray-500 text-sm">{doctor.specialties[0]?.toUpperCase()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
