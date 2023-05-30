import React from "react";
import Hero, { HeroProps } from "../components/hero/hero";
import ImgWithText, { ImgWithTextProps } from "../components/image-w-text/image-w-text";
import Faq, { FaqProps } from "../components/faq-section/faq";
import ContactForm, { ContactUsProps } from "../components/contact-form/contact-form";
import Layout from "./layout";
import { allContentfulPagesType } from "../types";

type ComponentMapType = {
  [key: string]: React.FC<any>;
  ContentfulHero: React.FC<HeroProps>;
  ContentfulImageWithText: React.FC<ImgWithTextProps>;
  ContentfulFaqSection: React.FC<FaqProps>;
  ContentfulContactUsSection: React.FC<ContactUsProps>;
};

const COMPONENT_MAP: ComponentMapType = {
  ContentfulHero: Hero,
  ContentfulImageWithText: ImgWithText,
  ContentfulFaqSection: Faq,
  ContentfulContactUsSection: ContactForm,
};

interface NewPageProps extends allContentfulPagesType {
  pageContext: {
    sections: {
      __typename: string;
      id: string;
      [key: string]: any;
    }[];
  };
}

const Page: React.FC<NewPageProps> = ({ pageContext }) => {
  const { sections } = pageContext;
  return (
    <div>
      <Layout>
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
