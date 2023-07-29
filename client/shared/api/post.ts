import useSWR from 'swr';
import { Fetcher } from '@/shared/api/fetcher';
import { ServerResponse } from '../responses/server-response';

export function usePost<T>(id: number) {
  const fetcher = () => Fetcher.query(`post/${id}`);
  const { data, error, isLoading } = useSWR('post', fetcher);
  return {
    post: data as unknown as ServerResponse<T>,
    isError: error,
    isLoading,
  };
}

export function usePosts<T>() {
  const fetcher = () => Fetcher.query('post');
  const { data, error, isLoading } = useSWR('posts', fetcher);
  return {
    posts: data as unknown as ServerResponse<T[]>,
    isError: error,
    isLoading,
  };
}
