import {} from '@nestjs/typeorm'
import { UUID } from 'crypto'
import { Address } from 'src/modules/address/entities/address.entity'
import { Education } from 'src/modules/education/entities/education.entity'
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: UUID

  @Column()
  name: string

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn({ name: 'addressId' })
  address: Address

  @OneToMany(() => Education, (education) => education.user)
  educations: Education
}
