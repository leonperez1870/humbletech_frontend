import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulSeoComponent } from "../../gatsby-graphql";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: {
    fields?: {
      file?: {
        en_US?: {
          url?: string;
        };
      };
    };
  };
}

const SEO: React.FC<SEOProps> = ({
  title = "",
  description = "",
  url = "",
  openGraphTitle = "",
  openGraphDescription = "",
  openGraphImage = {},
}) => {
  const data = useStaticQuery<{
    contentfulSeoComponent: ContentfulSeoComponent;
  }>(graphql`
    query SEOQuery {
      contentfulSeoComponent {
        openGraphDescription
        openGraphTitle
        openGraphImage {
          fields {
            file {
              en_US {
                url
              }
            }
          }
        }
        description
        url
        title
      }
    }
  `);

  const metaDescription = description || data.contentfulSeoComponent.description;
  const metaTitle = title || data.contentfulSeoComponent.title;
  const metaUrl = url || data.contentfulSeoComponent.url;
  const ogTitle = openGraphTitle || metaTitle;
  const ogDescription = openGraphDescription || metaDescription;
  const ogImage = openGraphImage?.fields?.file?.en_US?.url || data.contentfulSeoComponent?.openGraphImage?.fields?.file?.en_US?.url;

  const metaTags = [
    { name: "description", content: metaDescription },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: metaUrl },
    { property: "og:type", content: "website" },
  ];

  return (
    <React.Fragment>
      <title>{metaTitle}</title>
       {metaTags.map((meta, index) =>
        meta.property ? (
          <meta key={index} property={meta.property} content={meta.content} />
        ) : (
          <meta key={index} name={meta.name} content={meta.content} />
        )
      )}
      </React.Fragment>
  );
};

export default SEO;
