import { Controller, Get, Body, Patch, Param } from '@nestjs/common'
import { AddressService } from './address.service'
import { CreateAddressDto } from './dto/create-address.dto'
import { LinkSocietyDto, UpdateAddressDto } from './dto/update-address.dto'
import { UUID } from 'crypto'
import { ApiTags } from '@nestjs/swagger'
import { SocietyService } from '../society/society.service'

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
    private readonly societyService: SocietyService,
  ) {}

  // @Post()
  // create(@Param('userId') userId:UUID,@Body() createAddressDto: CreateAddressDto) {
  //   createAddressDto.userId = userId
  //   return this.addressService.create(createAddressDto);
  // }

  // @Get()
  // findAll() {
  //   return this.addressService.findAll()
  // }

  @Get(':userId')
  findOne(@Param('userId') userId: UUID) {
    return this.addressService.findOne(userId)
  }

  @Patch(':userId')
  update(
    @Param('userId') userId: UUID,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressService.update(userId, updateAddressDto)
  }

  @Patch('link-society/:societyId')
  async linkSociety(
    @Param('societyId') societyId: UUID,
    @Body() linkSocietyDto: LinkSocietyDto,
  ) {
    const societyDetails = await this.societyService.findOne(societyId)
    return await this.addressService.linkSociety(societyDetails, linkSocietyDto)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.addressService.remove(+id)
  // }
}
