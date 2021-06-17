import { ICreateDoctorDto } from '../dtos/ICreateDoctorDto'
import { Doctor } from '../infra/typeorm/entities/Doctor'

export interface IDoctorsRepository {
  create(createDoctorDto: ICreateDoctorDto): Promise<Doctor>
}
