import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-testid="doctor-card">
      <div className="flex items-start space-x-4">
        <img
          src={doctor.image || '/placeholder-user.jpg'}
          alt={doctor.name}
          className="w-24 h-24 rounded-full object-cover"
          data-testid="doctor-image"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900" data-testid="doctor-name">
                {doctor.name}
              </h2>
              <p className="text-gray-600" data-testid="doctor-specialties">
                {doctor.specialities.map(spec => spec.name).join(', ')}
              </p>
              <p className="text-sm text-gray-500" data-testid="doctor-experience">
                {doctor.experience} of experience
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-blue-600" data-testid="doctor-fees">
                ₹{doctor.fees}
              </p>
              <p className="text-sm text-gray-500">per consultation</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600" data-testid="doctor-location">
                {doctor.location}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {doctor.video_consult && (
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  data-testid="video-consult-badge"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Video Consult
                </span>
              )}
              {doctor.in_clinic && (
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  data-testid="clinic-badge"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  In-Clinic
                </span>
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-3">
            <button
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-600 rounded-lg transition-colors"
              data-testid="book-appointment-button"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;