import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Expanded Cinema & Science Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;