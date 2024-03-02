import style from './style.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={style.search}>
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
