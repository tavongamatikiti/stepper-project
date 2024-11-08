import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 min-h-[20dvh] flex flex-col justify-between overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We're on a mission to transform agriculture into a powerful engine
              for job creation, economic growth, and community resilience in
              Zimbabwe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className="text-sm hover:text-white transition-colors"
                >
                  Challenges
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={18} />
                <span className="text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={18} />
                <span className="text-sm">info@example.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={18} />
                <span className="text-sm">
                  African Leadership University, Kigali, Rwanda
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com/big_steppers6/"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://youtube.com/@BIG.STEPPERS006"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Your Company Name. All rights reserved.
            </p>
            <div>
              <ul className="flex justify-center md:justify-start space-x-6">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
