import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common'
import { SocietyService } from './society.service'
import { CreateSocietyDto } from './dto/create-society.dto'
import { UUID } from 'crypto'
import { ApiTags } from '@nestjs/swagger'
import { In } from 'typeorm'
import { UpdateSocietyDto } from './dto/update-society.dto'

@ApiTags('Society')
@Controller('society')
export class SocietyController {
  constructor(private readonly societyService: SocietyService) {}

  @Post()
  create(@Body() createSocietyDto: CreateSocietyDto) {
    return this.societyService.create(createSocietyDto)
  }

  @Get()
  findAll() {
    return this.societyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.societyService.findOne(id)
  }

  @Get('users/:userId')
  findByUserId(@Param('userId') userId: string) {
    const userIdArray = userId.split(',')

    return this.societyService.findAll({
      addresses: { user: { id: In(userIdArray) } },
    })
  }

  @Patch(':userId')
  update(
    @Param('userId') userId: UUID,
    @Body() updateSocietyDto: UpdateSocietyDto,
  ) {
    return this.societyService.update(userId, updateSocietyDto)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.societyService.remove(+id)
  // }
}
