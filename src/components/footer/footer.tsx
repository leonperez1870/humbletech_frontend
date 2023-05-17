// src/components/Footer.tsx
import * as React from 'react';

// Replace with your actual logo SVG
const LogoSVG = () => (
  <svg width="50" height="50">
    {/* SVG code goes here */}
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-6" role="contentinfo">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto order-2 md:order-none">
          <LogoSVG />
          <p className="sr-only">The Humble Tech</p>
        </div>
        <nav className="w-full md:w-auto order-1 md:order-none mb-6 md:mb-0" aria-label="Social media">
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a href="#" className="text-black hover:text-gray-700" aria-label="Link to LinkedIn profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor">
                  <path d="M6 9h3v12H6z"></path>
                  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                  <path d="M16 9h3v2.3A5 5 0 0 1 22 16v5h-3V16a3 3 0 0 0-6 0v5h-3V9h3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-700" aria-label="Link to Instagram profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
