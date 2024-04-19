import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';

import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';

import style from './style.module.css';

const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={style.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters?.category}
            setSelectedCategory={(category) =>
              changeFilters('category', category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters?.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
