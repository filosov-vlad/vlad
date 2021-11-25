import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['firstname', 'lastname', 'middlename'])
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nickname: string;
  @Column()
  email: string;
  @Column({ default: 'USER' })
  role: string;

  @Column()
  password_hash: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'timestamp with time zone', default: 'now()' })
  created_at: string;

  @Column({ type: 'timestamp with time zone', default: 'now()' })
  updated_at: string;
}
