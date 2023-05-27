import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/hero/hero";
import ImgWithText from "../components/image-w-text/image-w-text";
import Faq from "../components/faq-section/faq";
import ContactForm from "../components/contact-form/contact-form";
import Layout from "./layout";

interface PageContext {
  id: string;
  title: string;
  sections: any[];
}

interface PageProps {
  pageContext: PageContext;
}

const COMPONENT_MAP = {
  ContentfulHero: Hero,
  ContentfulImageWithText: ImgWithText,
  ContentfulFaqSection: Faq,
  ContentfulContactUsSection: ContactForm,
};

const Page: React.FC<PageProps> = ({ pageContext }) => {
  const { sections } = pageContext;

  return (
    <div>
      <Layout>
        {sections.map((section) => {
          // Get the component for this __typename
          const Component = COMPONENT_MAP[section.__typename];
          
          if (!Component) {
            // If no component is found, render nothing
            return null;
          }

          // Render the component
          return <Component key={section.id} {...section} />;
        })}
      </Layout>
    </div>
  )
}

export default Page;
