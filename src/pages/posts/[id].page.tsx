import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  getAllPostsIds,
  getPostData,
  ParameterizedId,
  PostData,
} from 'lib/posts';

import Layout from 'components/layout';
import Date from 'components/date';

import utilStyles from 'styles/utils.module.css';

import MDXComponents from './mdx-components';

export default function Post({
  postMeta,
  mdxSource,
}: { postMeta: PostData, mdxSource: MDXRemoteSerializeResult }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postMeta.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postMeta.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postMeta.date} />
        </div>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData: PostData = await getPostData(params.id);
  const { content: markdownContent, ...postMeta } = postData;
  const mdxSource = await serialize(markdownContent);

  return {
    props: {
      postMeta,
      mdxSource,
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
