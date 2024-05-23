import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

import style from './style.module.css';

const Main = () => {
  return (
    <main className={style.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
