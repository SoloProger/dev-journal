import { CardProps } from './props/card';
import styles from './Card.module.scss';
import CategorySup from './CategorySup';

export function Card({
  title,
  description,
  date,
  categories,
  onClick,
}: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
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
