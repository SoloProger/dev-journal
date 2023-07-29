'use client';

import { usePosts } from '@/shared/api';
import React from 'react';
import styles from './PopularSection.module.scss';

interface PopularSectionProps {
  title: string;
}

function PopularSection({ title }: PopularSectionProps) {
  const { posts, isError, isLoading } = usePosts();

  return (
    <section className={styles.wrapper}>
      <h3 className="text-3xl font-medium">{title}</h3>
      {posts?.data.map((card, idx) => (
        <div className="flex flex-col gap-3" key={idx}>
          <span className="text-lg">{card.title}</span>
          <span className="text-[#2F222266]">{card.date ?? '22.03.2023'}</span>
        </div>
      ))}
    </section>
  );
}

export default PopularSection;
