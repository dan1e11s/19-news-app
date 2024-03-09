import Image from '../Image/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import style from './style.module.css';
import withSkeleton from '../../helpers/hocs/withSkeleton';

const NewsBanner = ({ item }) => {
  return (
    <div className={style.banner}>
      <Image image={item?.image} />
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.time}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
