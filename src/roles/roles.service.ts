import { Injectable, Inject } from '@nestjs/common';
import { ROLE_REPOSITORY } from '@src/foundation/constant/index.constant';
import { Repository } from 'typeorm';
import { RolesEntity } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private repository: Repository<RolesEntity>,
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
}
