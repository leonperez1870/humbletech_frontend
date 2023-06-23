import React, { useState, useEffect } from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import HeroFeatureSection from '../hero-feature-section/hero-feature-section';

export interface HeroProps {
  backgroundImageDesktop: IGatsbyImageData;
  backgroundImageMobile: IGatsbyImageData;
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaText2: string;
  ctaUrl: string;
  ctaUrl2: string;
  featuredImage: IGatsbyImageData;
  allowFeatureSection: boolean;
  featureSection: Array<any>;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImageDesktop,
  backgroundImageMobile,
  heading,
  subHeading,
  ctaText,
  ctaText2,
  ctaUrl,
  ctaUrl2,
  featuredImage,
  allowFeatureSection,
  featureSection
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const desktopBgImg = getImage(backgroundImageDesktop),
        mobileBgImg = getImage(backgroundImageMobile),
        featuredImg = getImage(featuredImage);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isMobile ? mobileBgImg : desktopBgImg;

  return (
    <section className="Hero flex items-center justify-left bg-cover bg-center relative">
      { backgroundImage && <GatsbyImage image={backgroundImage} alt="Background image for the hero section" className="absolute inset-0 w-full h-full z-0" /> }
      <div className='container container--xl flex items-start flex-wrap'>
        <div className='Hero__content text-left text-white flex flex-col'>
          { heading && <h1 className="text-5xl mb-4">{heading}</h1> }
          { subHeading && <h2 className="text-2xl mb-8">{subHeading}</h2> }
          { ctaText && ctaUrl && 
            <div className='Hero__cta'>
              <a className="button button--medium button--primary" href={ctaUrl}>{ctaText}</a>
              { ctaText2 && ctaUrl2 && <a className='button button--medium button--secondary ml-5' href={ctaUrl2}>{ctaText2}</a> }
            </div>
          }
        </div>
        <div className='Hero__media flex items-center justify-center'>
          <GatsbyImage image={featuredImg} alt="Featured image for the hero section" className="w-full h-full" />
        </div>
        { allowFeatureSection && featureSection && featureSection.length > 0 && 
          <div className='Hero__feature-section flex flex-row flex-wrap items-center justify-center'>
            {
              featureSection.map((feature, index) => (
                <HeroFeatureSection 
                  key={index}
                  featureIcon={feature.featureIcon}
                  heading={feature.heading}
                  subheading={feature.subheading}
                  ctaText={feature.ctaText}
                  ctaUrl={feature.ctaUrl}
                />
              ))
            }
          </div>
        }
      </div>
    </section>
  )
} 

export default Hero;
