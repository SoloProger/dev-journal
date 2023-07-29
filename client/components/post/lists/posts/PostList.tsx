'use client';
import { usePosts } from '@/shared/api';
import { Card } from '@/shared/components/card/Card';
import styles from './PostList.module.scss';

import React from 'react';
import { Post } from '@/models/Post';
import { Category } from '@/models/Category';

function PostList() {
  const { posts, isError, isLoading } = usePosts<Post>();

  const categories: Category[] = [
    {
      id: 1,
      name: 'Категория 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Категория 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Категория 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <section className={styles.list}>
      {posts?.data.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          description={post.description}
          categories={categories}
          date="22.03.2023"
        />
      ))}
    </section>
  );
}

export default PostList;
