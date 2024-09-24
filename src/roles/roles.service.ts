import { Injectable, Inject } from '@nestjs/common';
import {
  ROLE_REPOSITORY,
  DATA_SOURCE,
} from '@src/foundation/constant/index.constant';
import { Repository, DataSource } from 'typeorm';
import { RolesEntity } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private repository: Repository<RolesEntity>,
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<RolesEntity[]> {
    return this.repository.find();
  }

  async findOneById(id: number): Promise<RolesEntity> {
    return this.repository.findOneBy({
      id,
    });
  }

  async save(role: RolesEntity) {
    return this.repository.save(role);
  }

  async update(role: RolesEntity) {
    return this.dataSource.transaction(async (transactionalEntityManager) => {
      const roleEntity = await transactionalEntityManager.findOne(RolesEntity, {
        where: {
          id: role.id,
        },
      });
      roleEntity.roleName = role.roleName;
      roleEntity.permisssions = role.permisssions;
      roleEntity.users = role.users;
      return transactionalEntityManager.save(roleEntity);
    });
  }
}
