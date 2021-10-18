import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "@components/seo"

import Layout from "@layouts/blog-post"

const BlogIndex = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Blog" />
      <Layout>
        <section className="blog-content__hero">
          <h1>Hi! Welcome to the Blog!</h1>
        </section>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Layout>
    </React.Fragment>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          tableOfContents(heading: "", maxDepth: 10, absolute: false)
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
