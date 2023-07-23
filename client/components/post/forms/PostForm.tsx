'use client';
import Input from '@/shared/ui/input/Input';
import Button from '@/shared/ui/button/Button';

export default function PostForm() {
  return (
    <form className='flex gap-4 flex-col items-center'>
      <Input title='Название' />
      <Input title='Описание' />
      <Button name='Сохранить' onClick={(event) => {
        event.preventDefault();
      }} />
    </form>
  );
}