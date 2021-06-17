import BaseEntity from '@shared/infra/typeorm/entities/BaseEntity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Speciality } from './Specialities'

@Entity('Doctors')
export class Doctor extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, length: 120 })
  name: string

  @Column({ type: 'varchar', nullable: false, length: 7 })
  crm: string

  @Column({ type: 'varchar', nullable: false })
  phone: string

  @Column({ type: 'varchar', nullable: false })
  cellphone: string

  @Column({ type: 'varchar', nullable: false, length: 8 })
  cep: string

  @ManyToMany(() => Speciality, speciality => speciality.doctors)
  @JoinTable()
  specialities: Speciality[]
}
