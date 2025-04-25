import React from 'react';

const FilterPanel = ({ filters, onFilterChange, onSortChange }) => {
  const specialties = [
    'General Physician',
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Orthopedist',
    'Neurologist'
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow" data-testid="filter-panel">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      {/* Consultation Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Consultation Type</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="consultationType"
              value="video_consult"
              checked={filters.consultationType === 'video_consult'}
              onChange={(e) => onFilterChange('consultationType', e.target.value)}
              data-testid="video-consult-filter"
              className="text-blue-600"
            />
            <span>Video Consultation</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="consultationType"
              value="in_clinic"
              checked={filters.consultationType === 'in_clinic'}
              onChange={(e) => onFilterChange('consultationType', e.target.value)}
              data-testid="clinic-filter"
              className="text-blue-600"
            />
            <span>In-Clinic</span>
          </label>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Specialties</h3>
        <div className="space-y-2">
          {specialties.map((specialty) => (
            <label key={specialty} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={specialty}
                checked={filters.specialties.includes(specialty)}
                onChange={(e) => {
                  const newSpecialties = e.target.checked
                    ? [...filters.specialties, specialty]
                    : filters.specialties.filter(s => s !== specialty);
                  onFilterChange('specialties', newSpecialties);
                }}
                data-testid={`specialty-${specialty.toLowerCase()}-filter`}
                className="text-blue-600 rounded"
              />
              <span>{specialty}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-medium mb-2">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border rounded-md"
          data-testid="sort-select"
        >
          <option value="">None</option>
          <option value="fees">Fees: Low to High</option>
          <option value="experience">Experience: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;