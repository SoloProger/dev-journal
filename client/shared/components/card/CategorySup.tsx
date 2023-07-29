import React from 'react';
import { CategorySupProps } from './props/category-sub';

function CategorySup({ name }: CategorySupProps) {
  return (
    <span className="text-[#5D71DD] bg-[#F7F8FD] rounded-lg px-4 py-2">
      {name}
    </span>
  );
}

export default CategorySup;
