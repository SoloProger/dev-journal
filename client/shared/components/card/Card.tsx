import { FC } from 'react';
import { CardProps } from './card';
import { CategorySup } from '@/shared/components/card/CategorySup';


export const Card: FC = ({ title, description, date, categories }: CardProps) => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='flex justify-between items-center'>
        {categories.map(category => <CategorySup name={category.name} />)}
        <span>{date}</span>
      </div>
      <h3 className='text-2xl font-normal'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};