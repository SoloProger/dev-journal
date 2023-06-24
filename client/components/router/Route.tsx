import { FC } from 'react';
import Link from 'next/link';
import { CustomRoute } from '@/components/router/router';


export const Route: FC = (route: CustomRoute) => {
  return (
    <li className='text-lg text-[#2F2222]'>
      <Link href={route.path}>{route.name}</Link>
    </li>
  );
};