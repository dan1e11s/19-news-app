import { useTheme } from '../../context/ThemeContext';

import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';

import style from './style.module.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${style.header} ${isDark ? style.dark : style.light}`}>
      <div className={style.info}>
        <h1 className={style.title}>NEWS</h1>
        <p className={style.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        onClick={toggleTheme}
        width={30}
        alt="theme"
      />
    </header>
  );
};

export default Header;
