import type { Doctor } from "@/types/doctor"
import { MapPin, Building } from "lucide-react"

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden" data-testid="doctor-card">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              {doctor.image ? (
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                  {doctor.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h2 className="text-xl font-medium text-gray-800" data-testid="doctor-name">
                  {doctor.name}
                </h2>
                <p className="text-gray-600 mb-1" data-testid="doctor-specialty">
                  {doctor.specialties.join(", ")}
                </p>
                <p className="text-gray-500 text-sm mb-2" data-testid="doctor-experience">
                  {doctor.experience} yrs exp.
                </p>

                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <Building className="w-4 h-4 mr-1" />
                  <span>{doctor.clinic}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg font-medium text-gray-800" data-testid="doctor-fee">
                  ₹ {doctor.fees}
                </p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
