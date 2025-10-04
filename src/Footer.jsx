import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-y-12 gap-x-10">
          <div className="md:col-span-2 flex flex-col justify-between h-full">
            <div>
              <img
                src="/assets/Group 475.png"
                alt="QuickShaw Logo"
                className="h-12 mb-6"
              />
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Your trusted mobility partner for IIT Varanasi. Connecting the
                campus community with reliable transportation solutions that
                make your daily commute seamless and efficient.
              </p>
            </div>
            <div className="flex space-x-5 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Twitter size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/safety-landing"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm">IIT Varanasi Campus</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm">info@quickshaw.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm">24/7 Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center flex-wrap gap-3">
                <a
                  href="#"
                  className="bg-black text-white border border-white/80 hover:border-white px-3 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
                  style={{ minWidth: "150px" }}
                  aria-label="Download on Google Play"
                >
                  <img
                    src="/assets/google-play.png"
                    alt="Google Play"
                    className="h-7 w-7 mr-2"
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-semibold tracking-wider text-gray-300">
                      GET IT ON
                    </span>
                    <span className="font-medium text-sm">Google Play</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="bg-black text-white border border-white/80 hover:border-white px-3 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
                  style={{ minWidth: "150px" }}
                  aria-label="Download on the App Store"
                >
                  <img
                    src="/assets/apple.png"
                    alt="Apple Store"
                    className="h-7 w-7 mr-2"
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-semibold tracking-wider text-gray-300">
                      Download on the
                    </span>
                    <span className="font-medium text-sm">App Store</span>
                  </span>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 QuickShaw. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-8 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
