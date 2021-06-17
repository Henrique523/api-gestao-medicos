import { Exclude } from 'class-transformer'
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id: number

  @Exclude()
  @CreateDateColumn({ type: 'timestamp', nullable: false, default: 'now()' })
  created_at: Date

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', nullable: false, default: 'now()' })
  updated_at: Date

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
