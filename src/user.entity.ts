import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Index(['firstname', 'lastname', 'middlename'])
@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column()
  nickname: string;

  @Index({ unique: true })
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

@Index([ 'id_courier'])
@Index([ 'id_pokupatelya'])
@Entity()
export class Zakaz {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_pokupatelya: string;

  @Column('uuid')
  id_courier: string;

  @Column()
  detal: string;
  collation: 'pizza';
  
  @Column()
  status: string;

  @Column({ type: 'timestamp with time zone', default: 'now()' })
  created_at: string;

  @Column({ type: 'timestamp with time zone', default: 'now()' })
  updated_at: string;
}