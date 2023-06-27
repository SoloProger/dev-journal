import { api } from '@/env';

export class Fetcher<T> {

  private readonly static baseApi = api.baseApi;

  static query(endpoint: string) {
    return fetch(`${this.baseApi}/${endpoint}`).then(res => res.json());
  }
}

export const fetcher = (endpoint: string) => Fetcher.query(endpoint);