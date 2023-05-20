import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Hero from "../components/hero/hero"
import 'tailwindcss/tailwind.css'
import '../styles/main.css'

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      allContentfulHomepage {
        edges {
          node {
            backgroundImageDesktop {
              gatsbyImageData(layout: CONSTRAINED, width: 1920)
            }
            ctaText
            ctaUrl
            heroHeading
            heroSubHeading
            sectionHeading
            sectionImage {
              gatsbyImageData(layout: CONSTRAINED, width: 600)
            }
            sectionSubHeading
            partnersHeading
            partnersSubHeading
            partnersLogos {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const {
    backgroundImageDesktop, 
    ctaText,
    ctaUrl,
    heroHeading,
    heroSubHeading,
    sectionHeading,
    sectionSubHeading,
    sectionImage,
    partnersHeading,
    partnersSubHeading,
    partnersLogos
  } = data.allContentfulHomepage.edges[0].node;

  const heroBgImage = getImage(backgroundImageDesktop);
  const secImage = getImage(sectionImage);

  return (
    <main>
      <Header siteTitle="The Humble Tech" />
      <Hero
        backgroundImageDesktop={heroBgImage}
        heroHeading={heroHeading}
        heroSubHeading={heroSubHeading}
        ctaText={ctaText}
        ctaUrl={ctaUrl}
      />
      <section aria-label="Information section">
        <div className="flex items-center justify-center">
          <GatsbyImage image={secImage} alt="Section Image" className="w-1/2"/>
          <div className="text-center text-black w-1/2">
            <h1 className="text-3xl mb-4">{sectionHeading}</h1>
            <h2 className="text-xl">{sectionSubHeading}</h2>
          </div>
        </div>
      </section>

      <section className="py-0" aria-label="Our Partnerships">
        <div className="w-full p-0 relative">
          <div className="flex justify-between items-center">
            <div className="lg:w-5/12 w-full flex justify-center items-center text-center">
              <div className="section-logos__content rte">
                <h2 className="mb-5">{partnersHeading}</h2>
                <p className="mb-7">{partnersSubHeading}</p>
              </div>
            </div>
            <div className="lg:w-7/12 w-full">
              <div className="section-logos__list ml-0">
                <div className="flex flex-wrap ml-0">
                  {partnersLogos.map((logo: any, index: number) => {
                    const img = getImage(logo);
                    return (
                      <div key={index} className="w-1/2 md:w-1/3">
                        <a href="" className="section-logos__item">
                          <GatsbyImage image={img} alt="" className="section-logos__icon" />
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
