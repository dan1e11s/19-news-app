import Image from '../Image/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import style from './style.module.css';
import { INews } from '../../interfaces';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
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

export default NewsBanner;
