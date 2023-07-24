import useSWR from 'swr';
import { Fetcher } from '@/shared/api/fetcher';

export function usePost(id: number) {
  const fetcher = () => Fetcher.query(`post/${id}`);
  const { data, error, isLoading } = useSWR('post', fetcher);
  return { post: data, isError: error, isLoading };
}

export function usePosts() {
  const fetcher = () => Fetcher.query('post');
  const { data, error, isLoading } = useSWR('posts', fetcher);
  return { posts: data, isError: error, isLoading };
}
