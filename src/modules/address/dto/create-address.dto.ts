import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class CreateAddressDto {

    @IsString()
    @ApiProperty()
    state:string

    @IsString()
    @ApiProperty()
    city:string

}
