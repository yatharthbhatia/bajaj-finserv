"use client"

import { useState } from "react"
import type { Doctor } from "@/types/doctor"

interface FilterPanelProps {
  doctors: Doctor[]
  consultationType: string | null
  selectedSpecialties: string[]
  sortBy: string | null
  onConsultationChange: (type: string | null) => void
  onSpecialtyChange: (specialty: string, isChecked: boolean) => void
  onSortChange: (sortOption: string | null) => void
}

export default function FilterPanel({
  doctors,
  consultationType,
  selectedSpecialties,
  sortBy,
  onConsultationChange,
  onSpecialtyChange,
  onSortChange,
}: FilterPanelProps) {
  const [isSortOpen, setIsSortOpen] = useState(true)
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(true)
  const [isConsultationOpen, setIsConsultationOpen] = useState(true)

  // Get unique specialties from all doctors
  const allSpecialties = Array.from(new Set(doctors.flatMap((doctor) => doctor.specialties))).sort()

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <h3 className="font-medium text-gray-800" data-testid="filter-header-sort">
            Sort by
          </h3>
          <svg
            className={`w-5 h-5 transition-transform ${isSortOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isSortOpen && (
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sort"
                checked={sortBy === "fees"}
                onChange={() => onSortChange("fees")}
                className="form-radio"
                data-testid="sort-fees"
              />
              <span>Price: Low-High</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sort"
                checked={sortBy === "experience"}
                onChange={() => onSortChange("experience")}
                className="form-radio"
                data-testid="sort-experience"
              />
              <span>Experience: Most Experience first</span>
            </label>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
        >
          <h3 className="font-medium text-gray-800" data-testid="filter-header-speciality">
            Specialities
          </h3>
          <svg
            className={`w-5 h-5 transition-transform ${isSpecialtiesOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isSpecialtiesOpen && (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {allSpecialties.map((specialty) => (
              <label key={specialty} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSpecialties.includes(specialty)}
                  onChange={(e) => onSpecialtyChange(specialty, e.target.checked)}
                  className="form-checkbox"
                  data-testid={`filter-specialty-${typeof specialty === "string" ? specialty.replace(/[/\s]/g, "-") : ""}`}
                />
                <span>{specialty}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setIsConsultationOpen(!isConsultationOpen)}
        >
          <h3 className="font-medium text-gray-800" data-testid="filter-header-moc">
            Mode of consultation
          </h3>
          <svg
            className={`w-5 h-5 transition-transform ${isConsultationOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isConsultationOpen && (
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="consultation"
                checked={consultationType === "Video Consult"}
                onChange={() => onConsultationChange("Video Consult")}
                className="form-radio"
                data-testid="filter-video-consult"
              />
              <span>Video Consultation</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="consultation"
                checked={consultationType === "In Clinic"}
                onChange={() => onConsultationChange("In Clinic")}
                className="form-radio"
                data-testid="filter-in-clinic"
              />
              <span>In-clinic Consultation</span>
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
