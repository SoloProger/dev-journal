import { Post } from '@/models/Post';
import { BaseProps } from '@/shared/base-props';

export type CardProps = BaseProps<Post> & {
  onClick?: () => void;
};
