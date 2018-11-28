import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'

function BlogPost(props) {
    console.log(props)
    // error - props.data is undefined!
    // // const post = props.data.markdownRemark
    // // const { title } = post.frontmatter
    const { title, html } = props.pageContext
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export default BlogPost

const query = graphql`
 query PostQuery {
     markdownRemark {
       html
       frontmatter {
        title
        description
       }
   }
}
`
// const query = graphql`
//  query PostQuery($slug: String!) {
//      markdownRemark(fields: { slug: { eq: $slug } }) {
//        html
//        frontmatter {
//         title
//         description
//        }
//    }
// }
// `
