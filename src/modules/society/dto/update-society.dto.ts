import { PartialType } from '@nestjs/mapped-types'
import { CreateSocietyDto } from './create-society.dto'
import { Address } from 'src/modules/address/entities/address.entity'
import { UUID } from 'crypto'
import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsString } from 'class-validator'

export class UpdateSocietyDto {
  @ApiProperty()
  @IsString()
  name?: string

  @ApiProperty()
  @IsArray()
  addresses?: Address[]
}

export class AddAddressDto {
  @ApiProperty()
  @IsArray()
  addresses: UUID[]
}
