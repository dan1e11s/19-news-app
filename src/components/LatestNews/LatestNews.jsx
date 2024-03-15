import BannersList from '../BannersList/BannersList';

import style from './style.module.css';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={style.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
