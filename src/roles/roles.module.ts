import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import {
  ROLE_REPOSITORY,
  DATA_SOURCE,
} from '@src/foundation/constant/index.constant';
import { DataSource } from 'typeorm';
import { RolesEntity } from './roles.entity';
import { RolesController } from './roles.controller';

@Module({
  providers: [
    {
      provide: ROLE_REPOSITORY,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(RolesEntity),
      inject: [DATA_SOURCE],
    },
    RolesService,
  ],
  controllers: [RolesController],
})
export class RolesModule {}
