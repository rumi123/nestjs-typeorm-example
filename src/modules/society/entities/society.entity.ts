import { UUID } from 'crypto'
import { Address } from 'src/modules/address/entities/address.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('societies')
export class Society {
  @PrimaryGeneratedColumn('uuid')
  id: UUID

  @Column()
  name: string

  @OneToMany(() => Address, (address) => address.society)
  addresses: Address[]
}
