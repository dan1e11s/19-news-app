import style from './style.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? style.active : style.item}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
