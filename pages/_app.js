import { useEffect } from 'react';
import '../globalStyle.css';
import { setWebsiteIcon } from '../utils';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setWebsiteIcon(document)
  }, [])

  return <Component {...pageProps} />
}