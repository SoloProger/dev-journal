'use client';

import React from 'react';
import Image from 'next/image';
import { usePost } from '@/shared/api';
import CategorySup from '@/shared/components/card/CategorySup';
import { Post } from '@/models/Post';
import { Category } from '@/models/Category';

function Post({ params }: { params: { id: number } }) {
  const { post, isError, isLoading } = usePost<Post>(params.id);

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
    <main>
      <Image src="/hero.png" alt="Hero img" width="1400" height="300" />
      <div>
        <div>
          {categories?.map((category) => (
            <CategorySup name={category.name} key={category.name} />
          ))}
        </div>
        <span>22.03.2023</span>
        <h3>{post?.data.title}</h3>
        <p>{post?.data.description}</p>
      </div>
    </main>
  );
}

export default Post;
