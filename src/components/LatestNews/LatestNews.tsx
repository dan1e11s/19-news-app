import BannersList from '../BannersList/BannersList';

import { useFetch } from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../api/apiNews';

import style from './style.module.css';
import { NewsApiResponse } from '../../interfaces';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={style.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
