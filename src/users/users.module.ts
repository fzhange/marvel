import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DataSource } from 'typeorm';
import { User } from './user.entity';
// import { DatabaseModule } from '../database/database.module';
import {
  DATA_SOURCE,
  USER_REPOSITORY,
} from '../foundation/constant/index.constant';

@Module({
  imports: [],
  providers: [
    {
      provide: USER_REPOSITORY,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
      inject: [DATA_SOURCE],
    },
    UsersService,
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
