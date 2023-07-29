import Image from 'next/image';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import MainLayout from '@/shared/layouts/MainLayout';
import PopularSection from '@/shared/components/popular-section/PopularSection';
import PostList from '@/components/post/lists/posts/PostList';

export default function Home() {
  return (
    <>
      <header>
        <Image src="/hero.png" alt="Hero img" width="1920" height="300" />
      </header>
      <MainLayout>
        <PostList />
        <PopularSection title="Популярные посты" />
      </MainLayout>
      <Pagination count={[1, 2, 3, 4, 5]} />
    </>
  );
}
