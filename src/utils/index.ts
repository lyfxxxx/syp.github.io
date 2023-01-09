const articles = import.meta.glob<common.md>('../assets/markDown/*.md')
const singleArticle = import('../assets/markDown/testMarkdown.md')

export const getArticleList = async (): Promise<common.articleListItem[]> => {
  let res = await Promise.all(Object.keys(articles).map((path) => articles[path]()));
  return res.map((module) => {
    const { attributes, html = '' } = module;
    const { title = '', abstract = '', createTime = ''} = attributes || {}
    debugger
    return {
      title,
      intro: abstract,
      html,
      createTime,
    }
  });
}
