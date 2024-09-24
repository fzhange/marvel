import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '@src/foundation/constant/index.constant';
import { Repository, DataSource } from 'typeorm';
import { DATA_SOURCE } from '@src/foundation/constant/index.constant';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<UserEntity> {
    console.log('id: ', id);
    return this.userRepository.findOneBy({
      id,
    });
  }

  async findOneByName(name: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({
      name,
    });
  }

  async save(users: UserEntity[]) {
    return this.userRepository.save(users);
  }

  async update(user: UserEntity) {
    console.log('user: ', user);
    return this.dataSource.transaction(async (transactionalEntityManager) => {
      const userEntity = await transactionalEntityManager.findOne(UserEntity, {
        where: {
          id: user.id,
        },
      });
      userEntity.available = user.available;
      userEntity.name = user.name;
      userEntity.password = user.password;
      userEntity.roles = user.roles;
      return transactionalEntityManager.save(userEntity);
    });
  }
}
