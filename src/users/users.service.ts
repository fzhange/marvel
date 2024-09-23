import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '@src/foundation/constant/index.constant';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({
      id,
    });
  }

  async findOneByName(name: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({
      name,
    });
  }

  async save(user: UserEntity) {
    return this.userRepository.save(user);
  }
}
