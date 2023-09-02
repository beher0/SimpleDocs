import { useEffect } from 'react';
import '../globalStyle.css';
import { setTocScrollToTop, setWebsiteIcon } from '@/utils';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setWebsiteIcon(document);
    setTocScrollToTop(document)
  }, [])

  return <Component {...pageProps} />
}