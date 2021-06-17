import { Speciality } from '../infra/typeorm/entities/Specialities'

export interface ICreateDoctorDto {
  name: string
  crm: string
  phone: string
  cellphone: string
  cep: string
  specialities: Speciality[]
}
