import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import '../styles/layout.css'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark
  return (
    <div className="page">
      <Layout>
        {postList.edges.map(({ node }, i) => (
          <div className="post-list">
            <Link to={node.fields.slug} className="link" >
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
