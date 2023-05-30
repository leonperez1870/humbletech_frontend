import type { GatsbyConfig } from "gatsby";

require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Humble Tech`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // "gatsby-plugin-google-gtag",
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  }, {
    resolve: 'gatsby-source-shopify',
    options: {
      storeUrl: process.env.SHOPIFY_STORE_DOMAIN,
      password: process.env.SHOPIFY_SHOP_PASSWORD,
      shopifyConnections: ["orders", "collections", "locations"],
    },
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
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-postcss", 
  ],
};

export default config;
