import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  name: string;
}

export default function Button({ name, ...props }: ButtonProps) {
  return (
    <button  className='bg-[#5D71DD] p-3 rounded-2xl text-white' {...props}>{name}</button>
  );
}