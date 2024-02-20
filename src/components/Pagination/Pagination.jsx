import style from './style.module.css';

const Pagination = ({
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPage,
  currentPage,
}) => {
  return (
    <div className={style.pagination}>
      <button
        disabled={currentPage <= 1}
        className={style.arrow}
        onClick={handlePreviousPage}
      >
        {'<'}
      </button>
      <div className={style.list}>
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index}
            className={style.pageNumber}
            disabled={index + 1 === currentPage}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPage}
        className={style.arrow}
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
