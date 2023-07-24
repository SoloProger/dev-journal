import { api } from '@/env';

export class Fetcher<T> {
  private static readonly baseViewApi = api.baseViewApi;

  private static readonly baseCommandApi = api.baseCommandApi;

  public static query(endpoint: string): Promise<Response> {
    return fetch(`${this.baseViewApi}/${endpoint}`).then((res) => res.json());
  }

  public static command(endpoint: string): Promise<Response> {
    return fetch(`${this.baseCommandApi}/${endpoint}`).then((res) =>
      res.json()
    );
  }
}

export const fetcher = (endpoint: string) => Fetcher.query(endpoint);
