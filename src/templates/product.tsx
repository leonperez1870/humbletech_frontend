import React, { useContext, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ShopContext } from '../utils/shopify/shop';
import { PageProps } from 'gatsby';
import Layout from './layout';
import SEO from '../components/seo';

interface ProductProps extends PageProps {
  pageContext: {
    id: string;
    storefrontId: string;
    title: string;
    totalInventory: number;
    descriptionHtml: string;
    handle: string;
    featuredImage: any;
    variants: Array<{
      price: string;
      title: string;
      id: string;
      storefrontId: string;
    }>;
  };
}

const ProductTemplate: React.FC<ProductProps> = ({ pageContext }) => {
  const { addProductToCart } = useContext(ShopContext);
  const [selectedVariant, setSelectedVariant] = useState(
    pageContext.variants && pageContext.variants.length > 0 ? pageContext.variants[0].storefrontId : ''
  );
  const image = getImage(pageContext.featuredImage);

  return (
    <Layout>
      <div className="flex flex-row justify-center items-start pt-16">
        <div className="w-1/2">
          <GatsbyImage image={image} alt={pageContext.title} />
        </div>
        <div className="w-1/2 items-center p-16">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-4">{pageContext.title}</h1>
          </div>
          <div className="w-full">
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: pageContext.descriptionHtml }} />
          </div>
          {pageContext.variants && pageContext.variants.length > 1 && (
            <div className="w-full mb-4">
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              >
                {pageContext.variants.map((variant) => (
                  <option key={variant.storefrontId} value={variant.storefrontId}>
                    {variant.title} - ${variant.price}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={() => {
              addProductToCart(selectedVariant, 1)
            }}
            className="px-8 py-4 bg-black text-white rounded text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;

export const Head = () => <SEO />
