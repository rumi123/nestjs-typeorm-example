import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { AddressModule } from './modules/address/address.module'
import { EducationModule } from './modules/education/education.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeormConfig } from './config/orm/orm.config'
import { ConfigModule } from '@nestjs/config'
import { SocietyModule } from './modules/society/society.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(TypeormConfig.getAsyncOptions()),
    UserModule,
    AddressModule,
    EducationModule,
    SocietyModule,
  ],
})
export class AppModule {}
