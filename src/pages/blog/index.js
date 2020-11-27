import React from "react"
import { graphql } from "gatsby"
import SEO from "@components/seo"
import ContentWrapper from "./layouts/content"

const BlogIndex = ({ data }) => {
  const firstPost = data.allMarkdownRemark.edges[0].node
  return (
    <React.Fragment>
      <SEO title="Blog" />
      <ContentWrapper heroTitle="Blog!!">
        <div>
          <div dangerouslySetInnerHTML={{ __html: firstPost.html }} />
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
