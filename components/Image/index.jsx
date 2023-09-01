import Image from 'next/image';
import style from './index.module.scss';

function Index({src, width = 1000, height = 1000}) {
  return (
    <div className={style.image}>
      <Image src={src} alt='image' width={width} height={height} />
    </div>
  );
}

export default Index;
