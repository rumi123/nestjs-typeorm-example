import { Injectable } from '@nestjs/common'
import { CreateAddressDto } from './dto/create-address.dto'
import { LinkSocietyDto, UpdateAddressDto } from './dto/update-address.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Address } from './entities/address.entity'
import { FindOptionsWhere, In, Repository } from 'typeorm'
import { UUID } from 'crypto'
import { User } from '../user/entities/user.entity'
import { Society } from '../society/entities/society.entity'

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(user: User, createAddressDto: CreateAddressDto) {
    const addressToSave = this.addressRepository.create({
      state: createAddressDto.state,
      city: createAddressDto.city,
      user,
    })
    return await this.addressRepository.save(addressToSave)
  }

  async findAll(where: FindOptionsWhere<Address>) {
    return this.addressRepository.find({ where })
  }

  async findOne(userId: UUID) {
    return await this.addressRepository.findOne({
      where: { user: { id: userId } },
    })
  }

  async update(userId: UUID, updateAddressDto: UpdateAddressDto) {
    return await this.addressRepository.update(
      { user: { id: userId } },
      updateAddressDto,
    )
  }

  async linkSociety(society: Society, linkSocietyDto: LinkSocietyDto) {
    return await this.addressRepository.update(
      { id: In(linkSocietyDto.addresses) },
      { society },
    )
  }

  remove(id: number) {
    return `This action removes a #${id} address`
  }
}
