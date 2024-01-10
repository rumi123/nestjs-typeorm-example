import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { UUID } from 'crypto'
import { AddressService } from '../address/address.service'
import { CreateAddressDto } from '../address/dto/create-address.dto'
import { CreateEducationDto } from '../education/dto/create-education.dto'
import { EducationService } from '../education/education.service'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly addressService: AddressService,
    private readonly educationService: EducationService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Post(':id/address')
  async addAddress(
    @Param('id') id: UUID,
    @Body() createUserAddressDto: CreateAddressDto,
  ) {
    const user = await this.userService.findOne(id)
    return await this.addressService.create(user, createUserAddressDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Post(':id/education')
  async addEducation(
    @Param('id') id: UUID,
    @Body() createEducationDto: CreateEducationDto,
  ) {
    const user = await this.userService.findOne(id)
    return await this.educationService.create(user, createEducationDto)
  }

  // @Get(':id')
  // findOne(@Param('id') id: UUID) {
  //   return this.userService.findOne(id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id)
  // }
}
