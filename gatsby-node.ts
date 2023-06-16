// gatsby-node.ts
import path from "path";
import { CreatePagesArgs } from "gatsby";
import { resContentfulType } from "./src/types";

const createContentfulPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const pageTemplate = path.resolve(`./src/templates/page.tsx`);
  const res: resContentfulType = await graphql(`
    query ContentfulPagesQuery {
      contentfulHeader {
        siteTitle,
        navigation {
          navItem
          navUrl
        }
        headerLogo {
          gatsbyImageData
        }
      }
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
                ctaText
                ctaText2
                ctaUrl
                ctaUrl2
                allowFeatureSection
                featureSection {
                  featureIcon {
                    gatsbyImageData
                  }
                  heading
                  subheading {
                    subheading
                  }
                  ctaText
                  ctaUrl
                }
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
              ... on ContentfulComponentText {
                id
                title
                text {
                  raw
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
  const header = res.data?.contentfulHeader;

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
          header: header
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
      contentfulHeader {
        siteTitle,
        navigation {
          navItem
          navUrl
        }
        headerLogo {
          gatsbyImageData
        }
      }
      allShopifyProduct {
        edges {
          node {
            id
            storefrontId
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
              storefrontId
            }
          }
        }
      }
    }
  `);

  const nodes = res.data?.allShopifyProduct.edges;
  const count = nodes.length;
  const header = res.data?.contentfulHeader;

  for (let i = 0; i < count; i++) {
    const node = nodes[i].node;
    if (node) {
      actions.createPage({
        path: `/products/${node.handle}`,
        component: pageTemplate,
        context: {
          id: node.id,
          storefrontId: node.storefrontId,
          title: node.title,
          handle: node.handle,
          totalInventory: node.totalInventory,
          descriptionHtml: node.descriptionHtml,
          featuredImage: node.featuredImage,
          variants: node.variants,
          header: header
        }
      });
    }
  }
};

const createShopifyCollectionPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const pageTemplate = path.resolve('./src/templates/collection.tsx');
  const res = await graphql(`
    query CollectionPagesQuery {
      contentfulHeader {
        siteTitle,
        navigation {
          navItem
          navUrl
        }
        headerLogo {
          gatsbyImageData
        }
      }
      allShopifyCollection {
        edges {
          node {
            title
            handle
            descriptionHtml
            products {
              handle
              title
              featuredImage {
                gatsbyImageData
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `);

  const nodes = res.data?.allShopifyCollection.edges;
  const count = nodes.length;
  const header = res.data?.contentfulHeader;

  for (let i = 0; i < count; i++) {
    const node = nodes[i].node;
    if (node) {
      actions.createPage({
        path: `/collections/${node.handle}`,
        component: pageTemplate,
        context: {
          title: node.title,
          handle: node.handle,
          descriptionHtml: node.descriptionHtml,
          products: node.products,
          header: header
        }
      });
    }
  }
}

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([
    createContentfulPages(params),
    createShopifyProductPages(params),
    createShopifyCollectionPages(params)
  ]);
};
