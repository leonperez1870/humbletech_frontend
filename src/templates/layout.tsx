// src/components/layout.tsx
import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ShoppingCart from "../components/shopping-cart/shopping-cart";

interface LayoutProps {
  children: React.ReactNode;
  siteTitle: string;
  navigation: Array<{ navItem: string; navUrl: string }>;
  headerLogo: any;
}

const Layout: React.FC<LayoutProps> = ({ children, siteTitle, navigation, headerLogo }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header siteTitle={siteTitle} navigation={navigation} headerLogo={headerLogo} toggleCart={toggleCart} />
      <main>{children}</main>
      <ShoppingCart toggleCart={toggleCart} isCartOpen={isCartOpen} />
      <Footer />
    </div>
  );
}

export default Layout;
