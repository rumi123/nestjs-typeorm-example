import { Controller, Get, Body, Patch, Param } from '@nestjs/common'
import { EducationService } from './education.service'
import { UpdateEducationDto } from './dto/update-education.dto'
import { UUID } from 'crypto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  // @Post()
  // create(@Body() createEducationDto: CreateEducationDto) {
  //   return this.educationService.create(createEducationDto);
  // }

  @Get(':userId')
  findAll(@Param('userId') userId: UUID) {
    return this.educationService.findAll(userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(+id)
  }

  @Patch(':userId')
  update(
    @Param('userId') userId: UUID,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return this.educationService.update(userId, updateEducationDto)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.educationService.remove(+id)
  // }
}
