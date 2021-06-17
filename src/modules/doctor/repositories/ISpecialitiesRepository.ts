import { Speciality } from '../infra/typeorm/entities/Specialities'

export interface ISpecialitiesRepository {
  index(): Promise<Speciality[]>
}
