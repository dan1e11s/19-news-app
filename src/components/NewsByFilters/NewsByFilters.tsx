import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useGetNewsQuery } from '../../store/services/newsApi';

import NewsList from '../NewsList/NewsList';
import NewsFilters from '../NewsFilters/NewsFilters';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

import { TOTAL_PAGE } from '../../constants/constants';

import style from './style.module.css';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const { filters, news } = useAppSelector((state) => state.news);

  const debouncedKeywords = useDebounce(filters?.keywords as string, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };
  return (
    <section className={style.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters?.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
