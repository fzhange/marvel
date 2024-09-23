import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
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
  role: string;

  @ManyToMany(() => UserEntity, (user: UserEntity) => user.roles)
  users: UserEntity[];

  @ManyToMany(
    () => PermissionEntity,
    (permissionEntity: PermissionEntity) => permissionEntity.roles,
  )
  permisssions: PermissionEntity[];
}
