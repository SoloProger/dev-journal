import Input from '@/shared/ui/input/Input';
import Select from '@/shared/ui/select/Select';
import Button from '@/shared/ui/button/Button';

export default function Filter() {
  return (
    <form className="flex flex-col gap-5 w-[320px]">
      <h3 className="text-2xl font-medium">Фильтрация</h3>
      <Input title="Название поста" />
      <Input title="Дата публикации" />
      <Select />
      <Button name="Фильтровать" />
    </form>
  );
}
