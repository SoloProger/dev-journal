import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';
import { User } from './user';

@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Column({
    type: 'character varying',
  })
  name?: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
