//TODO вынести в category
interface Category {
  name: string;
}

export interface CardProps {
  title: string;
  description?: string;
  categories?: Category[];
  date?: Date;
}