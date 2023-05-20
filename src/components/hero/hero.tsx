import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface HeroProps {
  backgroundImageDesktop: IGatsbyImageData;
  heroHeading: string;
  heroSubHeading: string;
  ctaText: string;
  ctaUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImageDesktop,
  heroHeading,
  heroSubHeading,
  ctaText,
  ctaUrl
}) => (
  <div className="Hero h-screen flex items-center justify-center bg-cover bg-center relative">
    <GatsbyImage image={backgroundImageDesktop} alt="Background image for the hero section" className="absolute inset-0 w-full h-full z-0" style={{filter: 'brightness(0.8)'}} />
    <div className="Hero-content text-center text-white relative">
      <h1 className="text-5xl mb-4">{heroHeading}</h1>
      <h2 className="text-2xl mb-8">{heroSubHeading}</h2>
      <a href={ctaUrl} className="bg-blue-500 text-white px-6 py-3 rounded-lg">{ctaText}</a>
    </div>
  </div>
)

export default Hero;