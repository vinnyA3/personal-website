import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from 'components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>First Post Here</h1>
        <Image
          src="/images/profile.jpg"
          height={400}
          width={400}
          alt="Gawr Goomba"
        />
      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
