import Link from 'next/link';
import style from './index.module.scss';

export default function StartPage() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <header>使用Nextra框架和MDX语法打造优美的文档网站</header>
        <div className={style.small_title}>
          简单、强大、灵活的站点生成框架 用Next. js中你喜欢的一切
        </div>
      </div>

      <div className={style.btn}>
        <Link href='/docs/instruction'>Get Started</Link>
        <span>→</span>
      </div>
    </div>
  );
}
