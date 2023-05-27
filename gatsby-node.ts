// gatsby-node.ts
import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all Contentful page data
  const result = await graphql<{
    allContentfulPages: {
      edges: {
        node: {
          id: string;
          title: string;
          slug: string;
          sections: {
            __typename: string;
            id: string;
            // Include other fields from the Section types as necessary
            // For a "Hero" type
            backgroundImageDesktop?: {
              gatsbyImageData: any;
            };
            backgroundImageMobile?: {
              gatsbyImageData: any;
            };
            heading?: string;
            subHeading?: string;
            // For a "ImageWithText" type
            imageOnRight?: boolean;
            sectionHeading?: string;
            sectionImage?: {
              gatsbyImageData: any;
            };
            sectionSubHeading?: string;
            spaceId?: string;
            // For a "Faq" type
            title: string;
            faqItems?: {
              question: string;
              answer: {
                answer: string;
              } | {
                answer: {
                  childMarkdownRemark: {
                    html: string;
                  }
                }
              };
            };
            contactSectionHeading?: string;
            contactSectionSubHeading?: {
              contactSectionSubHeading: string;
            } | {
              contactSectionSubHeading: {
                childMarkdownRemark: {
                  html: string;
                }
              }
            };
          }[];
        };
      }[];
    };
  }>(`
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

  if (result.errors) {
    throw result.errors;
  }

  // Create pages for each Contentful page
  result.data?.allContentfulPages.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        id: node.id,
        title: node.title,
        sections: node.sections,
      },
    });
  });
};
