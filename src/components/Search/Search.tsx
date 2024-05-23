import { useTheme } from '../../context/ThemeContext';
import style from './style.module.css';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${style.search} ${isDark ? style.dark : style.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={style.input}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
