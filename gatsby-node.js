/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);


// create posts from markdown files
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    resolve(graphql(`
    {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 50
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const blogTemplate = path.resolve('./src/templates/blog-post.js');

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}


// add 'slug' field
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    console.log(slug);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
