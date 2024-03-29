import { formatDate } from '../../helpers/formatDate';

import style from './style.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>NEWS</h1>
      <p className={style.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
