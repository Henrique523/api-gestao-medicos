import { Entity, ManyToMany, PrimaryColumn } from 'typeorm'
import { Doctor } from './Doctor'

@Entity('specialities')
export class Speciality {
  @PrimaryColumn({ type: 'varchar', nullable: false, generated: false })
  description: string

  @ManyToMany(() => Doctor, doctor => doctor.specialities)
  doctors: Doctor[]
}
