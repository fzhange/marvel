import { Controller, Post, Body } from '@nestjs/common';
import { UserEntity, FindByIdDto, FindByNameDto } from './user.entity';
import { ValidationPipe } from '@src/foundation/pipes/index';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/save')
  async save(@Body(new ValidationPipe()) users: UserEntity[]) {
    return this.usersService.save(users);
  }

  @Post('/findAll')
  async findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Post('/findOneById')
  async findOneById(
    @Body(new ValidationPipe()) findByIdDto: FindByIdDto,
  ): Promise<UserEntity> {
    return this.usersService.findOneById(findByIdDto.id);
  }

  @Post('/findOneByName')
  async findOneByName(
    @Body(new ValidationPipe()) findByNameDto: FindByNameDto,
  ): Promise<UserEntity> {
    return this.usersService.findOneByName(findByNameDto.name);
  }

  @Post('/update')
  async update(@Body(new ValidationPipe()) user: UserEntity) {
    return this.usersService.update(user);
  }
}
