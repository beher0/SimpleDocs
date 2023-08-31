import style from './index.module.scss';

function Image(props) {
  const {src, width, height} = props;
  return (
    <>
      <img src={src} width={width} height={height} className={style.image} />
    </>
  );
}

export default Image;
