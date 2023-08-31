import * as path from 'path';
import style from './index.module.scss';

function Image(props) {
  const {src, width, height} = props;

  return (
    <>
      <img
        src={
          process.env.NODE_ENV != 'production'
            ? src
            : path.join('/nextra-template', src)
        }
        width={width}
        height={height}
        className={style.image}
      />
    </>
  );
}

export default Image;
