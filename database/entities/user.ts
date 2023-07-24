import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';
import { Role } from './role';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({
    type: 'character varying',
  })
  name: string;

  @Column({
    type: 'character varying',
    unique: true,
  })
  login: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  email?: string;

  @Column({
    type: 'character varying',
    select: false,
  })
  password?: string;

  @ManyToMany(() => Role, (role) => role.users, {
    cascade: true,
  })
  @JoinTable()
  roles: Role[];
}
