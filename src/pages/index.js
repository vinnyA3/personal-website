import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '@components/layout';
import Date from '@components/date';

import utilStyles from '@styles/utils.module.css';

import { getSortedPostsData } from '../../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Vin</strong>. &nbsp;I am currently a Software Engineer at Equinox Media.
        </p>
        <p>
          This site is currently under construction.{' '}
          &nbsp;Stay tuned for the new design &amp; fresh content, which are both currently in the works 💪
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
