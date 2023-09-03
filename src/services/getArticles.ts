const articles = import.meta.glob<common.md>('../assets/markDown/*.md', { eager: true })
const keys = Object.keys(articles);

const getFileName = (name = '') => {
  let res = name.match(/(?<=\/)[a-zA-Z0-9_-]+(?=\.)/g) as RegExpMatchArray
  return res[0]
}

const mdFileMap = new Map<string, string>()
keys.forEach((key) => {
  const { html = '' } = articles[key];
  // 注意是否有存在同名文件的可能
  mdFileMap.set(getFileName(key), html)
})

const articleList: common.articleListItem[] = keys.map((key) => {
  const { title = '', description = '', createTime = '', html = '' } = articles[key];
  debugger
  return {
    title,
    intro: description,
    html,
    createTime,
    path: key,
    fileName: getFileName(key)
  }
})

export { 
  articleList,
  mdFileMap,
}
