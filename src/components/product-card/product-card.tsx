import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ProductCardProps {
  title: string;
  handle: string;
  priceMin: number;
  priceMax: number;
  featuredImage: IGatsbyImageData;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, handle, priceMin, priceMax, featuredImage }) => {
  return (
    <div className="border p-4">
      <a href={`/products/${handle}`}>
        <GatsbyImage image={featuredImage} alt={title} />
        <h2 className="text-xl font-bold">{title}</h2>
        <p>
          ${priceMin} - ${priceMax}
        </p>
      </a>
    </div>
  );
};

export default ProductCard;