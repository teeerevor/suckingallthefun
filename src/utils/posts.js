import 'github-markdown-css';

const posts = () => {
  var webpackRequireContext = require.context('!markdown-with-front-matter!../_posts', false, /\.md$/);

  return webpackRequireContext.keys().sort().reverse().reduce((memo, fileName) => {
    // frontmatter and content (actual markdown is loaded on '__content', frontmatter is right on root)
    const frontMatterMarkdown = webpackRequireContext(fileName);
    // remove cd and extension
    fileName = fileName.match(/\.\/([^\.]+)\.*/)[1];
    // extract year and path
    let tokenizedFilename = fileName.match(/^(\d{4}-\d{2}-\d{2})(.*)/)
    // validation
    if (!tokenizedFilename && !tokenizedFilename[1]) throw new Error('no ^YYYY-MM-DD date in blog filename')

    const date = tokenizedFilename[1];
    const name = tokenizedFilename[0];

    return memo.set(name, Object.assign({date: date}, frontMatterMarkdown));
  }, new Map());
}

export default posts;
