import { FC } from 'react';
import { routes } from '@/components/router/_routes';
import { Route } from '@/components/router/Route';


export const Routes: FC = () => {
  return <ul className='flex gap-10'>{routes.map((route) => <Route path={route.path} name={route.name} />)}</ul>;
};