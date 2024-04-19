import { forwardRef } from 'react';
import style from './style.module.css';

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div ref={ref} className={style.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? style.active : style.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? style.active : style.item
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = 'Categories';

export default Categories;
