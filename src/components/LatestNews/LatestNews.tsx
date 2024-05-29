import BannersList from '../BannersList/BannersList';
import { useGetLatestNewsQuery } from '../../store/services/newsApi';

import style from './style.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={style.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
