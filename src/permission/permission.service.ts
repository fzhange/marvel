import { Injectable, Inject } from '@nestjs/common';
import { PermissionEntity } from './permission.entity';
import { PERMISSION_REPOSITORY } from '@src/foundation/constant/index.constant';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {
  constructor(
    @Inject(PERMISSION_REPOSITORY)
    private repository: Repository<PermissionEntity>,
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
}
