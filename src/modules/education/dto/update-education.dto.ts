import { PartialType } from '@nestjs/mapped-types'
import { CreateEducationDto } from './create-education.dto'
import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateEducationDto {
  @IsString()
  @ApiProperty()
  name: string
}
