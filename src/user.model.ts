import { Column, Model, Table } from 'sequelize-typescript';
import { Timestamp, UsingJoinColumnIsNotAllowedError } from 'typeorm';

@Table
export class User extends Model {
  @Column
  id: UsingJoinColumnIsNotAllowedError;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column
  nickname: string;
  
  @Column
  email: string;
  
  @Column
  role: string;

  @Column
  password_hash: string;

  @Column
  created_at: Timestamp;

  @Column
  updated_at: Timestamp;
}