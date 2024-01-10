import { UUID } from 'crypto'
import { Society } from 'src/modules/society/entities/society.entity'
import { User } from 'src/modules/user/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: UUID

  @Column()
  state: string

  @Column()
  city: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @ManyToOne(() => Society)
  @JoinColumn({ name: 'societyId' })
  society: Society
}
