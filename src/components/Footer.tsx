import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400">
              Empowering professionals through quality corporate training and continuous learning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: pedro.lopes@heineken.com.br</li>
              <li>Address: R. Olimpíadas, 205 - Itaim Bibi, São Paulo - SP, 04546-004</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/heinekenbrasil?locale=pt_BR" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/heinekenbr" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/heineken/posts/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/heinekenbr/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Heineken Brasil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}