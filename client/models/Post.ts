import { BaseModel } from './BaseModel';
import { Category } from './Category';

export interface Post extends BaseModel {
  title: string;
  description: string;
  categories?: Category[];
  date?: string;
}
