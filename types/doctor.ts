export interface Doctor {
  name: string
  specialties: string[]
  experience: number
  fees: number
  clinic: string
  location: string
  image?: string
  videoConsult: boolean
  inClinic: boolean
}
