import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import { PickType, PartialType } from '@nestjs/swagger';
import { RolesEntity } from '@src/roles/roles.entity';
import { Transform } from 'class-transformer';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column()
  @Transform(({ value }) => value || true) // Assign default value if undefined
  available: boolean; // Default value without the need for @Transform

  @ManyToMany(() => RolesEntity, (role: RolesEntity) => role.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'users_roles',
  })
  roles: RolesEntity[];
}

export class FindByIdDto extends PartialType(PickType(UserEntity, ['id'])) {}
export class FindByNameDto extends PartialType(
  PickType(UserEntity, ['name']),
) {}
