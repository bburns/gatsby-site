import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import '../styles/layout.css'

const IndexPage = () => (
  <div className="page">
    <Layout>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

    // allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    //   edges {
    //     node {
    //       excerpt
    //       fields {
    //         slug
    //       }
    //       frontmatter {
    //         date(formatString: "MMMM DD, YYYY")
    //         title
    //       }
    //     }
    //   }
    // }
