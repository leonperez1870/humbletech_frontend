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

const createShopifyProductPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const pageTemplate = path.resolve('./src/templates/product.tsx');
  const res: resContentfulType = await graphql(`
    query ProductPagesQuery {
      allShopifyProduct {
        edges {
          node {
            id
            title
            totalInventory
            descriptionHtml
            handle
            featuredImage {
              gatsbyImageData
            }
            variants {
              price
              title
              id
            }
          }
        }
      }
    }
  `);

  const nodes = res.data?.allShopifyProduct.edges;
  const count = nodes.length;

  for (let i = 0; i < count; i++) {
    const node = nodes[i].node;
    if (node) {
      console.log(node)
      actions.createPage({
        path: `/products/${node.handle}`,
        component: pageTemplate,
        context: {
          id: node.id,
          title: node.title,
          handle: node.handle,
          totalInventory: node.totalInventory,
          descriptionHtml: node.descriptionHtml,
          featuredImage: node.featuredImage,
          variants: node.variants
        }
      });
    }
  }
};

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([
    createContentfulPages(params),
    createShopifyProductPages(params)
  ]);
};
