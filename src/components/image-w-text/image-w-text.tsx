import * as React from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

export interface ImgWithTextProps {
  sectionImage: IGatsbyImageData;
  sectionHeading: string;
  sectionSubHeading: string;
  imageOnRight?: boolean;
}

const ImgWithText: React.FC<ImgWithTextProps> = ({
  sectionImage,
  sectionHeading,
  sectionSubHeading,
  imageOnRight
}) => {
  const secImg = getImage(sectionImage);
  
  return (
    <section aria-label="Information section">
      <div className='container--xl'>
        {sectionImage && (
          <div className={`flex items-center justify-center ${imageOnRight ? 'flex-row-reverse' : ''}`}>
            <GatsbyImage image={secImg} alt="Section Image" className="w-1/2"/>
            <div className="text-center text-black w-1/2">
              { sectionHeading && <h1 className="text-3xl mb-4">{sectionHeading}</h1>}
              { sectionSubHeading && <h2 className="text-xl">{sectionSubHeading}</h2>}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImgWithText;
