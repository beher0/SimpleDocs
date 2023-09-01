import {getAvailablePath} from '../../utils/index';
import style from './index.module.scss';

export function Index({src, width, height}) {
  return (
    <>
      <img
        src={getAvailablePath(src)}
        alt='image'
        width={width}
        height={height}
        className={style.image}
      />
    </>
  );
}

export default Index;
