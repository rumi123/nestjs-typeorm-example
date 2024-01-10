import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export class TypeormConfig {
  private static getOptions(
    configService: ConfigService,
  ): TypeOrmModuleOptions {
    return {
      type: configService.getOrThrow<'postgres'>('DB_TYPE'),
      host: configService.getOrThrow<string>('DB_HOST'),
      port: configService.getOrThrow<number>('DB_PORT'),
      username: configService.getOrThrow<string>('DB_USER'),
      password: configService.getOrThrow<string>('DB_PASS'),
      database: configService.getOrThrow<string>('DB_NAME'),
      synchronize:
        configService.getOrThrow<string>('NODE_ENV') === 'development',
      entities: [__dirname + '/../../modules/**/entities/*.entity{.ts,.js}'],
    };
  }

  static getAsyncOptions(): TypeOrmModuleAsyncOptions {
    console.log(__dirname);
    return {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => this.getOptions(configService),
    };
  }
}
