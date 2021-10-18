import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '@components/seo';
import Layout from '@layouts/blog-post';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  useEffect(() => {
    const mediaString = '(max-width: 1290px)';
    const mql = window.matchMedia(mediaString);
    const tocEl = document.getElementById('toc');

    const handleChange = e => {
      if (e.matches) {
        tocEl.style.display = 'none';
      } else {
        tocEl.style.display = 'block';
      }
    };

    mql.addListener(handleChange);

    return () => mql.removeListener(handleChange);
  }, []);

  return (
    <React.Fragment>
      <SEO title={post.frontmatter.title} />
      <Layout>
        <section className="blog-content__hero">
          <h1>{post.frontmatter.title}</h1>
        </section>
        <div
          id="toc"
          className="blog-content__toc"
          style={{ position: 'fixed', left: '3em', top: '50%' }}
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
        <main
          className="blog-content__main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    </React.Fragment>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;
