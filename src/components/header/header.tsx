import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

interface NavigationItem {
  navItem: string;
  navUrl: string;
}

interface HeaderProps {
  siteTitle?: string;
  toggleCart: () => void;
  navigation: NavigationItem[];
  headerLogo: IGatsbyImageData;
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '', toggleCart = () => {}, navigation = [], headerLogo }) => {
  const logoImage = getImage(headerLogo);
  return (
    <header className="Header p-5 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold text-gray-800 Header__logo-title" aria-label="Home">
            {logoImage && <GatsbyImage image={logoImage} alt={siteTitle} className="w-24 rounded-full" />}
            <p>{siteTitle}</p>
          </Link>
        </div>
        <nav className="space-x-4" aria-label="Main">
          {navigation.map((navItem, index) => {
            return (
              <Link key={index} to={navItem.navUrl} className="text-gray-700 hover:text-indigo-600 transition duration-300">
                {navItem.navItem}
              </Link>
            );
          })}
          <button onClick={toggleCart} className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Cart
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
