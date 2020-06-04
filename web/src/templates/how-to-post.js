import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HowToArticle from "../components/how-to-article";

export const query = graphql`
  query MyQuery($id: String!, $tag: [String]!) {
    __typename

    howTo: sanityHowToArticle(id: { eq: $id }) {
      id
      publishedAt
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alt
      }
      headline
      subheading

      slug {
        current
      }
      heroVideo {
        url
        youTubeCaption
      }
      productList {
        productName
        productImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid_withWebp
            }
          }
          alt
        }
      }
      time
    }
    relatedArticle: sanityHowToArticle(tags: { elemMatch: { tagName: { in: $tag } } }) {
      id
      publishedAt
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alt
      }
      headline
      subheading
      slug {
        current
      }
      heroVideo {
        url
        youTubeCaption
      }
      productList {
        productName
        productImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid_withWebp
            }
          }
          alt
        }
      }
      tags {
        tagName
      }
      time
    }
  }
`;

const HowToArticleTemplate = ({ data }) => {
  console.log("data", data);
  const howTo = data && data.howTo;
  const relatedArticle = data && data.relatedArticle;
  return (
    <Layout>
      {howTo && <SEO title="howToArticle" />}
      {howTo && <HowToArticle {...howTo} {...relatedArticle} />}
    </Layout>
  );
};

export default HowToArticleTemplate;
