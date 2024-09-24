import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import { RolesEntity } from '@src/roles/roles.entity';

@Entity({ name: 'permission' })
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  permissionName: string;

  @ManyToMany(() => RolesEntity, (role: RolesEntity) => role.users)
  roles: RolesEntity[];
}
