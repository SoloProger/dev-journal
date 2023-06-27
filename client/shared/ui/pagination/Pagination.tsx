import { FC } from 'react';

interface Pagination {
  count: number[];
}

export const Pagination: FC = ({ count }: Pagination) => {
  return (
    <div className='w-full justify-center items-center flex gap-3 items-center p-10'>
      {count.map(num => (
        <span className='text-lg' key={num}>{num}</span>
      ))}
      <span className='text-[#5D71DD] bg-[#F7F8FD] rounded-lg px-4 py-2'>Следующая ></span>
    </div>
  );
};
