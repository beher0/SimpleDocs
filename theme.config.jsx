import Logo from './components/Logo';

export default {
  logo: Logo,
  project: {
    link: 'https://github.com/SimpleLifecst/nextra-template',
  },
  sidebar: {
    toggleButton: true,
  },
  search: {
    emptyResult: <span className='empty-result'>找不到结果</span>,
    loading: '加载中',
    error: '搜索错误',
    placeholder: '搜索',
  },
  toc: {
    title: '目录',
    backToTop: true,
    float: true,
  },
  editLink: {
    text: '在 GitHub 上编辑此页面 →',
  },
  feedback: {
    content: '问题？给我反馈 →',
  },
  // 翻译功能
  navigation: {
    prev: true,
    next: true,
  },
  // 底部版权标识
  footer: {
    text: (
      <span>
        Copyright {new Date().getFullYear()} © <span>SimpleLife</span>.
      </span>
    ),
  },
  // 网站图标
  faviconGlyph: './favicon.svg',
  // 编辑此页面的跳转链接 后会自动拼接 pages/
  docsRepositoryBase:
    'https://github.com/SimpleLifecst/nextra-template/tree/main/',
  // 页面标题 %s 占位符 由文章标题内容使用
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SimpleLife',
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '白天',
        dark: '黑夜',
        system: '系统',
      };
    },
  },
};
