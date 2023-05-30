import React, { useState, useEffect } from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

export interface HeroProps {
  backgroundImageDesktop: IGatsbyImageData;
  backgroundImageMobile: IGatsbyImageData;
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImageDesktop,
  backgroundImageMobile,
  heading,
  subHeading,
  ctaText,
  ctaUrl
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const desktopBgImg = getImage(backgroundImageDesktop),
        mobileBgImg = getImage(backgroundImageMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isMobile ? mobileBgImg : desktopBgImg;

  return (
    <div className="Hero h-screen flex items-center justify-center bg-cover bg-center relative">
      { backgroundImage && <GatsbyImage image={backgroundImage} alt="Background image for the hero section" className="absolute inset-0 w-full h-full z-0" style={{filter: 'brightness(0.8)'}} /> }
      { heading && <div className="Hero-content text-center text-white relative">
        <h1 className="text-5xl mb-4">{heading}</h1>
        { subHeading && <h2 className="text-2xl mb-8">{subHeading}</h2> }
        { ctaText && ctaUrl && <a href={ctaUrl} className="bg-blue-500 text-white px-6 py-3 rounded-lg">{ctaText}</a> }
      </div> }
    </div>
  )
} 

export default Hero;
