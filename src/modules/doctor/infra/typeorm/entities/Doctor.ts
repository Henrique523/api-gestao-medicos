import BaseEntity from '@shared/infra/typeorm/entities/BaseEntity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Speciality } from './Specialities'

@Entity('Doctors')
export class Doctor extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string

  @Column({ type: 'varchar', nullable: false })
  crm: string

  @Column({ type: 'varchar', nullable: false })
  phone: string

  @Column({ type: 'varchar', nullable: false })
  cellphone: string

  @Column({ type: 'varchar', nullable: false })
  cep: string

  @ManyToMany(() => Speciality, speciality => speciality.doctors)
  @JoinTable()
  specialities: Speciality[]
}
