import { FC } from 'react';


export interface CategorySupProps {
  name: string;
}

export const CategorySup: FC = ({ name }: CategorySupProps) => {
  return (
    <span className='text-[#5D71DD] bg-[#F7F8FD] rounded-lg px-4 py-2'>{name}</span>
  );
};