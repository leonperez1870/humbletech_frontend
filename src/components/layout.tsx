import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header siteTitle="The Humble Tech" />

    <main>{children}</main>

    <Footer />
  </div>
);

export default Layout;