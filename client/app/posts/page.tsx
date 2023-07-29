'use client';

import { Card } from '@/shared/components/card/Card';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { usePosts } from '@/shared/api';
import { useState } from 'react';
import { Modal } from '@/shared/ui/modal/Modal';
import { useRouter } from 'next/navigation';
import Filter from '@/shared/components/filters/Filter';

export default function Posts() {
  const { posts, isError, isLoading } = usePosts();

  const categories = [
    { name: 'Категория 1' },
    { name: 'Категория 2' },
    { name: 'Категория 3' },
  ];

  const router = useRouter();

  return (
    <>
      <main className="w-full py-10 px-[260px] flex gap-20 ">
        <section className="w-[1040px] flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl">Посты</h2>
          </div>
          {posts?.data.map((post: any) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              categories={categories}
              date="22.03.2023"
              onClick={() => router.push(`/posts/${post.id}`)}
            />
          ))}
        </section>
        <Filter />
      </main>
      <Pagination count={[1, 2, 3, 4, 5]} />
    </>
  );
}
