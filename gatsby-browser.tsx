import './src/styles/global.scss';
import React from 'react';
import { ShopifyProvider } from './src/utils/shopify/shop';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ShopifyProvider>{element}</ShopifyProvider>
);
