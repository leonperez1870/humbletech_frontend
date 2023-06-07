// gatsby-node.ts
import path from "path";
import { CreatePagesArgs } from "gatsby";
import { resContentfulType } from "./src/types";

const createContentfulPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const pageTemplate = path.resolve(`./src/templates/page.tsx`);
  const res: resContentfulType = await graphql(`
    query ContentfulPagesQuery {
      allContentfulPages {
        edges {
          node {
            id
            title
            slug
            sections {
              __typename
              ... on ContentfulHero {
                id
                backgroundImageDesktop {
                  gatsbyImageData
                }
                backgroundImageMobile {
                  gatsbyImageData
                }
                heading
                subHeading
              }
              ... on ContentfulImageWithText {
                id
                imageOnRight
                sectionHeading
                sectionImage {
                  gatsbyImageData
                }
                sectionSubHeading
                spaceId
              }
              ... on ContentfulFaqSection {
                title
                faqItems {
                  question
                  answer {
                    answer
                  }
                }
              }
              ... on ContentfulContactUsSection {
                contactSectionHeading
                contactSectionSubHeading {
                  contactSectionSubHeading
                }
              }
            }
          }
        }
      }
    }
  `);

  const nodes = res.data?.allContentfulPages.edges;
  const count = nodes.length;

  for (let i = 0; i < count; i++) {
    const { node } = nodes[i];
    if (node) {
      const { id, title, sections, slug } = node;
      actions.createPage({
        path: `/${slug}`,
        component: pageTemplate,
        context: {
          id: id,
          title: title,
          sections: sections,
        }
      });
    }
  }
};

const createShopifyProductPage = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;

}

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([createContentfulPages(params)]);
};
