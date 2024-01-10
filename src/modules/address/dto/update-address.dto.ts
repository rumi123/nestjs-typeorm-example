import { CreateAddressDto } from './create-address.dto'
import { UUID } from 'crypto'
import { IsArray } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateAddressDto extends CreateAddressDto {}

export class LinkSocietyDto {
  @IsArray()
  @ApiProperty()
  addresses: UUID[]
}
