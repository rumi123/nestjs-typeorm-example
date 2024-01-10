import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressController } from './address.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Address } from './entities/address.entity'
import { SocietyModule } from '../society/society.module'
import { SocietyService } from '../society/society.service'

@Module({
  imports: [TypeOrmModule.forFeature([Address]), SocietyModule],
  controllers: [AddressController],
  providers: [AddressService, SocietyService],
  exports: [AddressService, TypeOrmModule],
})
export class AddressModule {}
