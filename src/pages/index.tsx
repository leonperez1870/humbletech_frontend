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
      contentfulHeader {
        siteTitle
        navigation {
          navItem
          navUrl
        }
        headerLogo {
          gatsbyImageData
        }
      }
    }
  `);

  const { siteTitle, navigation, headerLogo } = data.contentfulHeader;
  const navItems = navigation.map((navItem: any) => {
    return {
      navItem: navItem.navItem,
      navUrl: navItem.navUrl
    };
  });

  return (
    <Layout siteTitle={siteTitle} navigation={navItems} headerLogo={headerLogo}>
      <SEO />
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
