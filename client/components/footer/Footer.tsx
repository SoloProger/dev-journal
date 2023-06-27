import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='p-10 flex flex-col justify-center items-center gap-10 bg-[#5D71DD0D]'>
      <h3 className='text-2xl'>Logo</h3>
      <ul className='flex gap-10'>
        <li>О нас</li>
        <li>Галерея</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
      <span>Dev Journal 2023. Все права защищены</span>
    </footer>
  );
};