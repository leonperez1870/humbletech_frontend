import React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
// SCSS can be found in src/components/hero/hero.scss

interface HeroFeatureSectionProps {
  featureIcon: IGatsbyImageData;
  heading: string;
  subheading: { subheading: string };
  ctaText: string;
  ctaUrl: string;
}

const HeroFeatureSection: React.FC<HeroFeatureSectionProps> = ({
  heading,
  subheading,
  ctaText,
  ctaUrl,
  featureIcon
}) => {
  const img = getImage(featureIcon);

  return (
    <div className="HeroFeatureSection flex flex-col items-center justify-between w-1/3 px-5 h-full">
      { featureIcon && <GatsbyImage image={img} alt="Feature icon" className="w-24 h-24 rounded-full" /> }
      { heading && <h3 className="text-2xl mb-4">{heading}</h3> }
      { subheading && <p className="mb-8">{subheading.subheading}</p> }
      { ctaText && ctaUrl && <a className="button button--full-width button--small button--secondary" href={ctaUrl}>{ctaText}</a> }
    </div>
  );
};

export default HeroFeatureSection;