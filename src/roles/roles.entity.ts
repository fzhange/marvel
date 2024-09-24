import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import { UserEntity } from '@src/users/user.entity';
import { PermissionEntity } from '@src/permission/permission.entity';

@Entity({ name: 'role' })
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  roleName: string;

  @ManyToMany(() => UserEntity, (user: UserEntity) => user.roles)
  users: UserEntity[];

  @ManyToMany(
    () => PermissionEntity,
    (permissionEntity: PermissionEntity) => permissionEntity.roles,
    {
      cascade: true,
    },
  )
  @JoinTable({
    name: 'roles_permisssions',
  })
  permisssions: PermissionEntity[];
}
