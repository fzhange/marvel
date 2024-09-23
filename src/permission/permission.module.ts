import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import {
  DATA_SOURCE,
  PERMISSION_REPOSITORY,
} from '@src/foundation/constant/index.constant';
import { DataSource } from 'typeorm';
import { PermissionEntity } from './permission.entity';

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
})
export class PermissionModule {}
