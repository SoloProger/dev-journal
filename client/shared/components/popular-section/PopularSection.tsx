import { FC } from 'react';

interface Card {
  title: string;
  date: string;
}

interface PopularSectionProps {
  title: string;
  cards: Card[];
}

export const PopularSection: FC = ({ title, cards }: PopularSectionProps) => {
  return (
    <section className='flex flex-col gap-9 w-[320px]'>
      <h4 className='text-2xl font-medium'>{title}</h4>
      {cards?.map(card => (
        <div className='flex flex-col gap-3'>
          <span className='text-lg'>{card.title}</span>
          <span className='text-[#2F222266]'>{card.date ?? '22.03.2023'}</span>
        </div>
      ))}
    </section>
  );
};