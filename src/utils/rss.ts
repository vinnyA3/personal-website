import { unified, VFileWithOutput } from 'unified';
import remarkParse from 'remark-parse';
import remarkHTML from 'remark-html';

import { ParameterizedId } from 'lib/posts';

const markdownStringToHTML = async (
  markdown: string
): Promise<VFileWithOutput<string>> =>
  unified().use(remarkParse).use(remarkHTML).process(markdown);

const normalizeIdsFromParams = (parameterizedIds: ParameterizedId[]): string[] => {
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
