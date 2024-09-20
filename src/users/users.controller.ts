import { Controller, Post, Body } from '@nestjs/common';
import { User, FindByIdDto, FindByNameDto } from './user.entity';
import { ValidationPipe } from './validation.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/save')
  async save(@Body(new ValidationPipe()) user: User) {
    user.available = true;
    return this.usersService.save(user);
  }

  @Post('/findAll')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('/findOneById')
  async findOneById(
    @Body(new ValidationPipe()) findByIdDto: FindByIdDto,
  ): Promise<User> {
    console.log('findByIdDto: ', findByIdDto);

    return this.usersService.findOneById(findByIdDto.id);
  }

  @Post('/findOneByName')
  async findOneByName(
    @Body(new ValidationPipe()) findByNameDto: FindByNameDto,
  ): Promise<User> {
    return this.usersService.findOneByName(findByNameDto.name);
  }
}
