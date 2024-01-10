import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateEducationDto {
  @IsString()
  @ApiProperty()
  school: string

  @IsString()
  @ApiProperty()
  class: string

  @IsString()
  @ApiProperty()
  name: string
}
