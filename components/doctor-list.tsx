import type { Doctor } from "@/types/doctor"
import DoctorCard from "./doctor-card"

interface DoctorListProps {
  doctors: Doctor[]
}

export default function DoctorList({ doctors }: DoctorListProps) {
  if (doctors.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <p className="text-gray-500">No doctors found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  )
}
