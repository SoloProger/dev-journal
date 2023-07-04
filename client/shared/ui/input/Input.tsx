import { InputProps } from '@/shared/ui/input/input-type';


export default function Input({ title, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-3 justify-center'>
      <label htmlFor=''>{title}</label>
      <input type='text' {...props} className='bg-[#F5F5F5] p-2 rounded-2xl text-[#2F222266]' />
    </div>
  );
}