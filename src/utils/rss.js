import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHTML from 'remark-html';

const markdownStringToHTML = async markdown =>
  unified()
    .use(remarkParse)
    .use(remarkHTML)
    .process(markdown);

const normalizeIdsFromParams = parameterizedIds => {
  return parameterizedIds.reduce((acc, paramObj) => {
    const {
      params: { id },
    } = paramObj;
    acc.push(id);
    return acc;
  }, []);
};

export default {
  markdownStringToHTML,
  normalizeIdsFromParams,
};
