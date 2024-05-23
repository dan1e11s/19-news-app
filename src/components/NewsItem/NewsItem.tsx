import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import { INews } from '../../interfaces';

import style from './style.module.css';

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={style.item}>
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={style.info}>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.time}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
