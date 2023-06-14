import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../templates/layout";
import Hero from "../components/hero/hero";
import ImgWithText from "../components/image-w-text/image-w-text";
import Faq from "../components/faq-section/faq";
import ContactForm from "../components/contact-form/contact-form";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulPages(slug: { eq: "home" }) {
        title
        sections {
          __typename
          ... on ContentfulHero {
            id
            heading
            subHeading
            backgroundImageDesktop {
              gatsbyImageData
            }
            backgroundImageMobile {
              gatsbyImageData
            }
            ctaText
            ctaUrl
            ctaText2
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
            sectionHeading
            sectionSubHeading
            imageOnRight
            sectionImage {
              gatsbyImageData
            }
          }
          ... on ContentfulFaqSection {
            id
            title
            faqItems {
              question
              answer {
                answer
              }
            }
          }
          ... on ContentfulContactUsSection {
            id
            contactSectionHeading
            contactSectionSubHeading {
              contactSectionSubHeading
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      {data.contentfulPages.sections.map((section: any) => {
        switch (section.__typename) {
          case 'ContentfulHero':
            return <Hero key={section.id} {...section} />
          case 'ContentfulImageWithText':
            return <ImgWithText key={section.id} {...section} />
          case 'ContentfulFaqSection':
            return <Faq key={section.id} {...section} />
          case 'ContentfulContactUsSection':
            return <ContactForm key={section.id} {...section} />
          default:
            return null;
        }
      })}
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <SEO />