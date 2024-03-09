import style from './style.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={style.categories}>
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
};

export default Categories;
