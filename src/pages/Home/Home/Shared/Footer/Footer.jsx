import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {


  return (
    <footer className="bg-[#eeebe5] text-gray-800 py-10 text-center mt-40"
    >
        <div className='lg:flex justify-around   items-center container mx-auto'>
      <div className="flex justify-center items-center gap-4 mb-4">
        <span className="text-lg font-semibold">FIND US</span>
        <FaFacebookF className="text-xl cursor-pointer hover:text-gray-600" />
        <FaInstagram className="text-xl cursor-pointer hover:text-gray-600" />
        <FaPinterestP className="text-xl cursor-pointer hover:text-gray-600" />
        <FaXTwitter className="text-xl cursor-pointer hover:text-gray-600" />
        <FaYoutube className="text-xl cursor-pointer hover:text-gray-600" />
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className=" text-5xl text-center font-merienda font-extrabold">
         Yummify
        </div>
      </div>
      <p className="text-lg font-semibold mb-4">Simple Recipes That Make <br/>You Feel Good</p>
      </div>
      <hr className="border-gray-800 w-3/4 mx-auto mb-4" />
      <div className="flex justify-center gap-6 text-sm font-semibold mb-4">
        <Link to="/services" className="hover:text-gray-600">Recipes</Link>
        <Link to="/About" className="hover:text-gray-600">About</Link>
        <Link to="/blog" className="hover:text-gray-600">Blog</Link>
        
      </div>
      <p className="text-xs text-gray-500">©YUMMIFY.COM</p>
      <div className="flex justify-center gap-6 text-xs text-gray-500 mt-2">
        <Link to="/privacy-policy" className="hover:text-gray-600 font-extrabold">PRIVACY POLICY</Link>
        <Link to="/terms" className="hover:text-gray-600">TERMS</Link>
      </div>
    </footer>
  );
};

export default Footer;
