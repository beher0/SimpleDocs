import '../globalStyle.css';
import {HashRouter} from 'react-router-dom'

export default function MyApp({ Component, pageProps }) {
  return <HashRouter>
    <Component {...pageProps} />
  </HashRouter>
}