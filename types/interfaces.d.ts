declare module common {
  export interface articleListItem {
    title: string,
    createTime: string,
    intro: string,
    html: string,
    path: string,
    fileName: string,
  }
  
  export interface headerItem {
    showName: string;
    name: string;
  }

  export interface md {
    attributes: string,
    title: string,
    createTime: string,
    description: string,
    fileName: string,
    image: string,
    html: string,
  }
}