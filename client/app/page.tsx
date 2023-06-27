'use client';

import Image from 'next/image';
import { usePosts } from '@/shared/api/';
import { Card } from '@/shared/components/card/Card';
import { PopularSection } from '@/shared/components/popular-section/PopularSection';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  const { posts, isError, isLoading } = usePosts();

  const categories = [{ name: 'Категория 1' }, { name: 'Категория 2' }, { name: 'Категория 3' }];

  return (
    <>
      <header>
        <Image src='/hero.png' alt='Hero img' width='1920' height='300' />
      </header>
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
        <PopularSection title='Популярные посты' cards={posts?.data} />
      </main>
      <Pagination count={[1, 2, 3, 4, 5]} />
      <Footer />
    </>
  );
}
