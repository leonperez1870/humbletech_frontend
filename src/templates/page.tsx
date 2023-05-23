import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/hero/hero";
import ImgWithText from "../components/image-w-text/image-w-text";

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
};

const Page: React.FC<PageProps> = ({ pageContext }) => {
  const { sections } = pageContext;

  return (
    <div>
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
    </div>
  )
}

export default Page;