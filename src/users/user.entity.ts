import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import { PickType, PartialType } from '@nestjs/swagger';
// import { Transform } from 'class-transformer';

@Entity()
export class User {
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
  // @Transform(({ value }) => value || true) // Assign default value if undefined
  available: boolean = true; // Default value without the need for @Transform
}

export class FindByIdDto extends PartialType(PickType(User, ['id'])) {}
export class FindByNameDto extends PartialType(PickType(User, ['name'])) {}
