import { FC } from 'react';
import { Routes } from '@/components/router/Routes';

export const Navbar: FC = () => {
  return (
    <nav className='flex justify-between p-4'>
      <div>Logo</div>
      <Routes />
    </nav>
  );
};
