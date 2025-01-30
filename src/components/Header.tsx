import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/ranking', label: 'Ranking' },
    { path: '/suggest', label: 'Suggest Course' }
  ];

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Star className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Testttttt</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors duration-300 ${
                  isActive(path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
            <button className="btn-primary">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 transition-colors duration-300 ${
                  isActive(path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <button className="w-full btn-primary">
              Login
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}