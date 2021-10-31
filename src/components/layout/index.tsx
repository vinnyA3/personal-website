import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import utilStyles from 'styles/utils.module.css';

import styles from './layout.module.css';

const name = 'Vincent Aceto';
export const siteTitle = `${name}`;

export default function Layout({
  children,
  home = false,
}: {
  children: JSX.Element[];
  home?: boolean;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Vincent Aceto's personal website & blog"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div className={styles.socialLinksContainer}>
              {
                // eslint-disable-next-line
              }<a href="/rss.xml">
                <FontAwesomeIcon icon={faRss} />
              </a>
              <a href="https://www.linkedin.com/in/vinaceto">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/vinnyA3">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
