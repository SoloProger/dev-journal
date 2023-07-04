import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  title: string;
}

export interface Input {
  title: string;
}