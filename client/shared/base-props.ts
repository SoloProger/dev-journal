export type BaseProps<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
