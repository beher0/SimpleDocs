import dayjs from 'dayjs';
import {useEffect} from 'react';

function LastUpdateDate({timestamp}) {
  useEffect(() => {
    console.log('打印更新时间', timestamp);
  }, []);
  return '最后更新于 ' + dayjs(timestamp).format('YYYY年M月D日');
}

export default LastUpdateDate;
