import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from '../components/seo';
import { PageProps } from 'gatsby';
import ProductCard from '../components/product-card/product-card';

interface CollectionTemplateProps extends PageProps {
  pageContext: {
    title: string;
    descriptionHtml: string;
    products: Array<{
      handle: string;
      title: string;
      featuredImage: any;
      priceRange: {
        maxVariantPrice: {
          amount: number;
        };
        minVariantPrice: {
          amount: number;
        };
      };
    }>;
  };
}

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({ pageContext }) => {
  const { title, descriptionHtml, products } = pageContext;
  return (
    <Layout>
      <section className='pt-20 text-center'>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => {
            const image = getImage(product.featuredImage);

            return (
              <ProductCard
                key={product.handle}
                title={product.title}
                handle={product.handle}
                priceMin={product.priceRangeV2.minVariantPrice.amount}
                priceMax={product.priceRangeV2.maxVariantPrice.amount}
                featuredImage={image}
              />
            );
          })}
        </div>
        </section>
    </Layout>
  );
};

export default CollectionTemplate;
export const Head = () => <SEO />