import { Module } from '@nestjs/common'
import { SocietyService } from './society.service'
import { SocietyController } from './society.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Society } from './entities/society.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Society])],
  controllers: [SocietyController],
  providers: [SocietyService],
  exports: [SocietyService, TypeOrmModule],
})
export class SocietyModule {}
