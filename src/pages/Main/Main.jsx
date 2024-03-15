import LatestNews from '../../components/LatestNews/LatestNews';

import { getNews } from '../../api/apiNews';

import style from './style.module.css';
import { PAGE_SIZE } from '../../constants/constants';

import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

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

  return (
    <main className={style.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        news={data?.news}
        filters={filters}
        changeFilters={changeFilters}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Main;
