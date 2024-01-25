import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import style from './style.module.css';

const NewsItem = ({ item }) => {
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
