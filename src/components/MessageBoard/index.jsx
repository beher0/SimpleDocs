import { useEffect } from 'react';

export default function MessageBoard() {
  useEffect(() => {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      let d = document,
        s = d.createElement('script');
      s.src = 'https://beher0.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }, []);

  return <div id="disqus_thread"></div>;
}
