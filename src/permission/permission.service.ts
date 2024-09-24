import { Injectable, Inject } from '@nestjs/common';
import { PermissionEntity } from './permission.entity';
import {
  PERMISSION_REPOSITORY,
  DATA_SOURCE,
} from '@src/foundation/constant/index.constant';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class PermissionService {
  constructor(
    @Inject(PERMISSION_REPOSITORY)
    private repository: Repository<PermissionEntity>,
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<PermissionEntity[]> {
    return this.repository.find();
  }

  async findOneById(id: number): Promise<PermissionEntity> {
    return this.repository.findOneBy({
      id,
    });
  }

  async save(permission: PermissionEntity) {
    return this.repository.save(permission);
  }

  async update(permission: PermissionEntity) {
    return this.dataSource.transaction(async (transactionalEntityManager) => {
      const permissionEntity = await transactionalEntityManager.findOne(
        PermissionEntity,
        {
          where: {
            id: permission.id,
          },
        },
      );
      permissionEntity.permissionName = permission.permissionName;
      permissionEntity.roles = permission.roles;
      return transactionalEntityManager.save(permissionEntity);
    });
  }
}
