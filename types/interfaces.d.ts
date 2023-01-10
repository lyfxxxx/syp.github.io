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
    attributes: Record<string, string>,
    html: string,
  }
}