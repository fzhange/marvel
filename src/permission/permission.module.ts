import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import {
  DATA_SOURCE,
  PERMISSION_REPOSITORY,
} from '@src/foundation/constant/index.constant';
import { DataSource } from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { PermissionController } from './permission.controller';

@Module({
  providers: [
    {
      provide: PERMISSION_REPOSITORY,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(PermissionEntity),
      inject: [DATA_SOURCE],
    },
    PermissionService,
  ],
  controllers: [PermissionController],
})
export class PermissionModule {}
