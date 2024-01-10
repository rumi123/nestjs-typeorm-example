import { Injectable } from '@nestjs/common'
import { CreateSocietyDto } from './dto/create-society.dto'
import { UpdateSocietyDto } from './dto/update-society.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Society } from './entities/society.entity'
import { FindOptionsWhere, Repository } from 'typeorm'
import { UUID } from 'crypto'

@Injectable()
export class SocietyService {
  constructor(
    @InjectRepository(Society)
    private societyRepository: Repository<Society>,
  ) {}
  async create(createSocietyDto: CreateSocietyDto) {
    const dataToSave = this.societyRepository.create(createSocietyDto)
    return await this.societyRepository.save(dataToSave)
  }

  async findAll(where?: FindOptionsWhere<Society>) {
    console.log(where)

    return await this.societyRepository.find({ where })
  }

  async findOne(id: UUID) {
    return await this.societyRepository.findOne({ where: { id } })
  }

  async update(userId: UUID, updateSocietyDto: UpdateSocietyDto) {
    const societyDetails = await this.societyRepository.findOne({
      where: { addresses: { user: { id: userId } } },
    })
    return await this.societyRepository.update(
      societyDetails.id,
      updateSocietyDto,
    )
  }

  remove(id: number) {
    return `This action removes a #${id} society`
  }
}
