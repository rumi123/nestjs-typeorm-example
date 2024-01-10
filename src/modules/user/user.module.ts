import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { AddressModule } from '../address/address.module'
import { AddressService } from '../address/address.service'
import { EducationModule } from '../education/education.module'
import { EducationService } from '../education/education.service'

@Module({
  imports: [TypeOrmModule.forFeature([User]), AddressModule, EducationModule],
  controllers: [UserController],
  providers: [UserService, AddressService, EducationService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
