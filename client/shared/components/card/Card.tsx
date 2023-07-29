import { CardProps } from './card';
import { CategorySup } from '@/shared/components/card/CategorySup';
import styles from './Card.module.scss';

export function Card({ title, description, date, categories }: CardProps) {
  return (
    <div className={styles.card}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          {categories?.map((category) => (
            <CategorySup name={category.name} key={category.name} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[#2F222266]">{date}</span>
        </div>
      </div>
      <h3 className="text-2xl font-normal">{title}</h3>
      <p className="text-[#2F222266]">{description}</p>
    </div>
  );
}
