import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { USER_REPOSITORY } from '../foundation/constant/index.constant';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    console.log('id: ', id);
    return this.userRepository.findOneBy({
      id,
    });
  }

  async findOneByName(name: string): Promise<User> {
    return this.userRepository.findOneBy({
      name,
    });
  }

  async save(user: User) {
    return this.userRepository.save(user);
  }
}
