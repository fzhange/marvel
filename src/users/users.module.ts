import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DataSource } from 'typeorm';
import { UserEntity } from './user.entity';
import {
  DATA_SOURCE,
  USER_REPOSITORY,
} from '@src/foundation/constant/index.constant';

@Module({
  imports: [],
  providers: [
    {
      provide: USER_REPOSITORY,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(UserEntity),
      inject: [DATA_SOURCE],
    },
    UsersService,
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
