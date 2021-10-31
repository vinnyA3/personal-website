import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import {
  getAllPostsIds,
  getPostData,
  ParameterizedId,
  PostData,
} from 'lib/posts';

import Layout from 'components/layout';
import Date from 'components/date';

import utilStyles from 'styles/utils.module.css';

export default function Post({ postData }: { postData: PostData }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {postData.content}
        </ReactMarkdown>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData: PostData = await getPostData(params.id)

  return {
    props: {
      postData,
    }
  }
}

export async function getStaticPaths() {
  const paths: ParameterizedId[] = getAllPostsIds();

  return {
    paths,
    fallback: false,
  }
}
