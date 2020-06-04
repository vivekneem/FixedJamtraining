import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import loadable from "@loadable/component"
const BlogPost = loadable(() => import("../components/blog-post"))
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage.asset.fluid}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
