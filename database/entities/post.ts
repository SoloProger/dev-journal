import { BaseEntity } from './base';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Category } from './category';

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

  @ManyToMany(() => Category, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[];
}
