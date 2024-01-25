import NewsItem from '../NewsItem/NewsItem';
import style from './style.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={style.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
