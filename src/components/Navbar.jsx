import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl lg:text-3xl font-serif font-semibold text-emerald-800 hover:text-emerald-700 transition-colors"
          >
            WKMP
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('agents')}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors relative group"
              >
                Our Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('listings')}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors relative group"
              >
                Sold Listings
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('agents')}
                  className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('listings')}
                  className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2"
                >
                  Sold Listings
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;