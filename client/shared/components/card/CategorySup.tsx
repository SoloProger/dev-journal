import { FC } from 'react';

export const CategorySup: FC = (name: string) => {
  return (
    <span className='text-[#5D71DD] bg-[#F7F8FD] rounded-lg'>{name}</span>
  );
};