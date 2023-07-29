'use client';
import { usePosts } from '@/shared/api/';
import { Card } from '@/shared/components/card/Card';
import styles from './PostList.module.scss';

import React from 'react';

function PostList() {
  const { posts, isError, isLoading } = usePosts();

  const categories = [
    { name: 'Категория 1' },
    { name: 'Категория 2' },
    { name: 'Категория 3' },
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
