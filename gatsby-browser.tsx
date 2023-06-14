import './src/styles/theme.scss';
import React from 'react';
import { ShopifyProvider } from './src/utils/shopify/shop';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ShopifyProvider>{element}</ShopifyProvider>
);
