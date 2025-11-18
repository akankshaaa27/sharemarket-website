import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fefd4ffd1079d4c2098f59b6b5c24c07c%2F0b3caffae6de46a5bae133bec02b9b1b?format=webp&width=800"
                alt="Kalvati Enterprises Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm opacity-90 mb-4">
              30+ years of expertise in share market advisory, IEPF claim recovery, and financial counselling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/iepf-recovery" className="hover:text-accent transition-colors">
                  IEPF Recovery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@kalvati.com" className="hover:text-accent transition-colors">
                  contact@kalvati.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center md:text-left">
            <p>&copy; {currentYear} Kalvati Enterprises. All rights reserved.</p>
            <div className="flex gap-4 justify-center md:justify-center">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-opacity-75">Designed for trust and growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
