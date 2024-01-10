import { UUID } from 'crypto'
import { User } from 'src/modules/user/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('educations')
export class Education {
  @PrimaryGeneratedColumn()
  id: UUID

  @Column()
  school: string

  @Column()
  class: string

  @Column()
  name: string

  @ManyToOne(() => User, (user) => user.educations)
  @JoinColumn({ name: 'userId' })
  user: User
}
