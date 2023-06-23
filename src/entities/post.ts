import { BaseEntity } from './base';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'posts' })
export class Post extends BaseEntity {

  @Column({
    type: 'character varying',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  image: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  categoryId: number;
}