import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';
import { Post } from './post';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @ManyToMany(() => Post, (post) => post.categories)
  posts: Post[];
}
