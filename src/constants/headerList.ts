interface headerItem {
  showName: string;
  name: string;
}

const headerList: headerItem[] = [
  {
    showName: '首页',
    name: 'home',
  },
  {
    showName: '博客',
    name: 'blog',
  },
  {
    showName: '相册',
    name: 'album',
  }
];

export default headerList;