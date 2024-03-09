import withSkeleton from '../../helpers/hocs/withSkeleton';
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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;
