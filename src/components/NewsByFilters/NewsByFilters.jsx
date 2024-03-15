import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../Pagination/Pagination';

import { TOTAL_PAGE } from '../../constants/constants';

import style from './style.module.css';
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
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
    <section className={style.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters?.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters?.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
