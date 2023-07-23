import { CardProps } from './card';
import { CategorySup } from '@/shared/components/card/CategorySup';
import Button from '@/shared/ui/button/Button';

export function Card({
  title,
  description,
  date,
  categories,
  isEdit,
}: CardProps) {
  return (
    <div className="w-full bg-white flex flex-col gap-8 justify-center rounded-2xl p-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          {categories?.map((category) => (
            <CategorySup name={category.name} key={category.name} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[#2F222266]">{date}</span>
          {isEdit ? <Button name="Редактировать" /> : ''}
        </div>
      </div>
      <h3 className="text-2xl font-normal">{title}</h3>
      <p className="text-[#2F222266]">{description}</p>
    </div>
  );
}
