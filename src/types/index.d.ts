import { ContentfulPagesQueryQuery } from "../../gatsby-graphql";

export interface resContentfulType {
  data?: ContenfulPagesQueryQuery;
}

export interface collectionType {
  id: string;
  title?: string | null;
  handle?: string | null;
}

export type variantType = {
  id: string;
  color?: string;
  image?: any;
  size?: string;
  storefrontId?: string | null;
  price?: string | null;
  compareAtPrice?: string | null;
};

export type variantsType = Array<
  | {
      id: string;
      price?: string | null;
      compareAtPrice?: string | null;
      title?: string | null;
      storefrontId?: string | null;
      image?: { gatsbyImageData: any } | null;
    }
  | null
  | undefined
>;

export type shopifyProduct = {
  id: string;
  title?: string | null;
  handle?: string | null;
  productType?: string | null;
  images?: Array<{ altText?: string | null; gatsbyImageData: any } | null | undefined> | null;
  variants?: Array<
    | {
        id: string;
        price?: string | null;
        compareAtPrice?: string | null;
        title?: string | null;
        storefrontId?: string | null;
        image?: { gatsbyImageData: any } | null;
      }
    | null
    | undefined
  > | null;
};

export type allContentfulPagesType = {
  id: string;
  title: string;
  slug: string;
  sections: {
    __typename: string;
    id: string;
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

