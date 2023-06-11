import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ShoppingCart from "../components/shopping-cart/shopping-cart";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header siteTitle="The Humble Tech" toggleCart={toggleCart} />
      <main>{children}</main>
      {isCartOpen && <ShoppingCart />}
      <Footer />
    </div>
  );
}

export default Layout;
