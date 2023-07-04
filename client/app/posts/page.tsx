'use client';

import { Card } from '@/shared/components/card/Card';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { usePosts } from '@/shared/api';
import Filter from '@/shared/components/filters/Filter';

export default function Posts() {
  const { posts, isError, isLoading } = usePosts();

  const categories = [{ name: 'Категория 1' }, { name: 'Категория 2' }, { name: 'Категория 3' }];

  return (
    <>
      <main className='w-full py-10 px-[260px] flex gap-20 '>
        <section className='w-[1040px]'>
          {posts?.data.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              categories={categories}
              date='22.03.2023'
            />
          ))}
        </section>
        <Filter />
      </main>
      <Pagination count={[1, 2, 3, 4, 5]} />
    </>
  );
};