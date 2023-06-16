import React from "react";
import Hero, { HeroProps } from "../components/hero/hero";
import ImgWithText, { ImgWithTextProps } from "../components/image-w-text/image-w-text";
import Faq, { FaqProps } from "../components/faq-section/faq";
import ContactForm, { ContactUsProps } from "../components/contact-form/contact-form";
import TextWithDescription, { TextWithDescriptionProps } from "../components/text-w-description/text-w-description";
import Layout from "./layout";
import { ContentfulPagesQueryQuery } from "../../gatsby-graphql";
import SEO from "../components/seo";

type ComponentMapType = {
  [key: string]: React.FC<any>;
  ContentfulHero: React.FC<HeroProps>;
  ContentfulImageWithText: React.FC<ImgWithTextProps>;
  ContentfulFaqSection: React.FC<FaqProps>;
  ContentfulContactUsSection: React.FC<ContactUsProps>;
  ContentfulComponentText: React.FC<TextWithDescriptionProps>;
};

const COMPONENT_MAP: ComponentMapType = {
  ContentfulHero: Hero,
  ContentfulImageWithText: ImgWithText,
  ContentfulFaqSection: Faq,
  ContentfulContactUsSection: ContactForm,
  ContentfulComponentText: TextWithDescription
};

interface NewPageProps extends ContentfulPagesQueryQuery {
  pageContext: {
    sections: {
      __typename: string;
      id: string;
      [key: string]: any;
    }[];
    header: {
      siteTitle: string;
      navigation: Array<{ navItem: string; navUrl: string }>;
      headerLogo: any;
    };
  };
}

const Page: React.FC<NewPageProps> = ({ pageContext }) => {
  const { sections, header } = pageContext;
  return (
    <div>
      <Layout siteTitle={header.siteTitle} navigation={header.navigation} headerLogo={header.headerLogo}>
        {sections.map((section, index) => {
          const Component = COMPONENT_MAP[section.__typename];
          const sectionId = section.id ? section.id : index;
          if (!Component) {
            return null;
          }
          return <Component key={sectionId} {...section} />;
        })}
      </Layout>
    </div>
  );
};

export default Page;

export const Head = () => <SEO />
