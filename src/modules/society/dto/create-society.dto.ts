import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateSocietyDto {
  @IsString()
  @ApiProperty()
  name: string
}
