

import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3FBFC]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Bennet & Chase</h2>
          <p className="text-sm leading-relaxed mb-4">
            Expert Accounting & Advisory Services committed to your financial clarity and success.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-neutral-900 transition">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Industries</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Business Accounting</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Tax Planning</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Audit & Assurancey</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Payroll & Bookkeeping</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Financial Advisory</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Blogs</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Client Portal</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Case Studies</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900 transition">Insights</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-start text-xs text-neutral-900 md:mx-10 lg:mx-15 ">
        &copy; {new Date().getFullYear()} Bennet & Chase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
