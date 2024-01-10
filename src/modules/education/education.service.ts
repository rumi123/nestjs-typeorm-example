import { Injectable } from '@nestjs/common'
import { CreateEducationDto } from './dto/create-education.dto'
import { UpdateEducationDto } from './dto/update-education.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Education } from './entities/education.entity'
import { Repository } from 'typeorm'
import { User } from '../user/entities/user.entity'
import { UUID } from 'crypto'

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}
  async create(user: User, createEducationDto: CreateEducationDto) {
    const educationData = { ...createEducationDto, user }
    const dataToSave = await this.educationRepository.create(educationData)
    return await this.educationRepository.save(dataToSave)
  }

  async findAll(userId: UUID) {
    return await this.educationRepository.find({
      where: { user: { id: userId } },
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} education`
  }

  async update(userId: UUID, updateEducationDto: UpdateEducationDto) {
    return await this.educationRepository.update(
      { user: { id: userId } },
      updateEducationDto,
    )
  }

  remove(id: number) {
    return `This action removes a #${id} education`
  }
}
