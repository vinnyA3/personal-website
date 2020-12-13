/**
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const fs = require("fs-extra")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    const slug = `/blog${createFilePath({
      node,
      getNode,
      basePath: path.resolve(path.join(__dirname, "content")),
    })}`
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        path.join(__dirname, "src/templates/blog-post.js")
      ),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onPostBuild = () => {
  // Handle CNAME configuration
  console.log("Copying [CNAME] file to /public ...")
  fs.copyFileSync(
    path.join(__dirname, "CNAME"),
    path.join(__dirname, "/public/CNAME")
  )
}
