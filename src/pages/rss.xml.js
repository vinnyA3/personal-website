import formatRFC from 'date-fns/formatRFC7231';

import utils from 'utils';

import { getAllPostsIds, getPostData } from '../../lib/posts';

const {
  rss: { markdownStringToHTML, normalizeIdsFromParams },
} = utils;

const POSTS_URL = 'https://www.vincentaceto.com/posts/';

const generatePostsXMLAndMeta = async ids => {
  let latestPostDate = '';
  let postsXML = '';

  for (let i = 0; i < ids.length; i += 1) {
    const post = await getPostData(ids[i]);
    const parsedMarkdown = await markdownStringToHTML(post.content);
    const postDate = Date.parse(post.date);
    const derivedLink = `${POSTS_URL}${post.id}`;

    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }

    postsXML += `
    <item>
        <title>${post.title}</title>
        <link>${derivedLink}</link>
        <guid isPermaLink="false">${derivedLink}</guid>
        <pubDate>${formatRFC(postDate)}</pubDate>
        <description>
        <![CDATA[${parsedMarkdown}]]>
        </description>
    </item>`;
  }

  return {
    postsXML,
    latestPostDate,
  };
};

const getComposedXML = postsXMLAndMeta => {
  const { postsXML, latestPostDate } = postsXMLAndMeta;
  const latestPostDateRFC = formatRFC(Date.parse(latestPostDate));

  return `<?xml version="1.0" ?>
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>Vincent Aceto's Blog RSS Feed</title>
        <link>https://www.vincentaceto.com</link>
        <atom:link href="https://www.vincentaceto.com/rss.xml" rel="self" type="application/rss+xml" />
        <description>Personal Blog by Vincent Aceto.  I like to write sometimes.</description>
        <language>en</language>
        <lastBuildDate>${latestPostDateRFC}</lastBuildDate>
        ${postsXML}
    </channel>
  </rss>`;
};

export async function getServerSideProps({ res }) {
  const normalizedPostIds = normalizeIdsFromParams(getAllPostsIds());
  const postsXML = await generatePostsXMLAndMeta(normalizedPostIds);

  res.write(getComposedXML(postsXML));
  res.end();

  return { props: {} };
}

export default () => null;
