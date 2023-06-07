import type { GatsbyConfig } from "gatsby";

require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Humble Tech`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
  "gatsby-plugin-offline",
  {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  }, 
  {
    resolve: 'gatsby-source-shopify',
    options: {
      password: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      storeUrl: process.env.GATSBY_SHOPIFY_SHOP_NAME,
      shopifyConnections: [
        'orders', 'collections', 'locations'
      ]
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      fileName: `./gatsby-graphql.ts`,
      documentPaths: ["./src/**/*.{ts,tsx}", "./node_modules/gatsby-*/**/*.js", "./gatsby-node.ts"],
    }
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        `gatsby-remark-images-contentful`,
        `gatsby-remark-responsive-iframe`
      ]
    }
  },
  {
    resolve: `gatsby-plugin-polyfill-io`,
    options: {
      features: ['Array.prototype.map', 'fetch'],
    }
  },
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-postcss",
  "gatsby-plugin-catch-links",
  "gatsby-plugin-sass"
  ],
};

export default config;
