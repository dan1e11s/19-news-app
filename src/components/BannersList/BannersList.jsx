import style from './style.module.css';
import withSkeleton from '../../helpers/hocs/withSkeleton';

import NewsBanner from '../NewsBanner/NewsBanner';

const BannersList = ({ banners }) => {
  return (
    <ul className={style.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
