import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';

import { getCategories, getNews } from '../../api/apiNews';

import style from './style.module.css';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';

import { TOTAL_PAGE, PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters?.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilters('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters('page_number', pageNumber);
  };

  return (
    <main className={style.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters?.category}
          setSelectedCategory={(category) =>
            changeFilters('category', category)
          }
        />
      ) : null}

      <Search
        keywords={filters?.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters?.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters?.page_number}
      />
    </main>
  );
};

export default Main;
