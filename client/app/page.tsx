'use client';

import Image from 'next/image';
import { usePosts } from '@/shared/api/';

export default function Home() {
  const { posts, isError, isLoading } = usePosts();

  return (
    <header><Image src='/hero.png' alt='Hero img' width='1920' height='300' /></header>
  );
}
