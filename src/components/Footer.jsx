const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-8 mb-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-amber-200 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('agents')}
                className="hover:text-amber-200 transition-colors"
              >
                Our Team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('listings')}
                className="hover:text-amber-200 transition-colors"
              >
                Sold Listings
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-amber-200 transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>

          <div className="border-t border-emerald-700 pt-8">
            <p className="text-sm opacity-90">
              &copy; {new Date().getFullYear()} Wisconsin's Kettle Moraine Properties. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;