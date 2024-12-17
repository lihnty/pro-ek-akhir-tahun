import React from 'react';
import FAQPage from '../views/FAQPage';
import ContactPage from '../views/ContactPage';
import ServicePage from '../views/ServicePage';
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
            <Link to={"/"} className="mb-2">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt="" />
            </Link>
            <p className="text-gray-400 md:text-sm">
              About In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document or a typeface
            </p>
          </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Social Media</h4>
          <ul className="text-sm space-y-2">
            <li><a href="https://www.facebook.com/" className="hover:text-gray-400" target='_blank'>Facebook</a></li>
            <li><a href="https://twitter.com/" className="hover:text-gray-400" target='_blank'>Twitter</a></li>
            <li><a href="https://www.instagram.com/" className="hover:text-gray-400" target='_blank'>Instagram</a></li>
            <li><a href="https://www.linkedin.com/" className="hover:text-gray-400" target='_blank'>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
