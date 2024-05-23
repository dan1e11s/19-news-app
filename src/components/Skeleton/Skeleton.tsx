import { DirectionType, SkeletonType } from '../../interfaces';
import style from './style.module.css';

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

export default function Skeleton({
  count = 1,
  type = 'banner',
  direction = 'column',
}: Props) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={direction === 'column' ? style.columnList : style.rowList}
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === 'banner' ? style.banner : style.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === 'banner' ? style.banner : style.item}></li>
      )}
    </>
  );
}
