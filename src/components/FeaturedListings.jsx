import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedListings = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  
  const listings = [
    // NEW HOMES FIRST (11 new homes)
    { address: 'N64W15296 Sunny Dale Dr, Menomonee Falls', image: '/sunnydale.jpg' },
    { address: '330 Wisconsin St Mayville', image: '/wistreet2.png' },
    { address: '330 Wisconsin St Mayville', image: '/wistreet.png' },
    { address: '3279 Lighthouse Ln West Bend', image: '/lighthouse2.png' },
    { address: '3279 Lighthouse Ln West Bend', image: '/lighthouse1.png' },
    { address: 'W209N11020 Springhill Ln, Germantown', image: '/springhill.jpg' },
    { address: '711 Jean Ct, Allenton', image: '/jeancourt.jpg' },
    { address: '130 W Prospect St, Hartford', image: '/prospect.jpg' },
    { address: '471 Elder Ln, Allenton', image: '/elder.jpg' },
    
    // Continue to show 18 more from existing (27 total)
    { address: '1920 Deerfield Dr, West Bend', image: '/deerfield.jpg' },
    { address: 'W5384 Wildlife Ln, Fond Du Lac', image: '/wildlife.jpg' },
    { address: '6079 St Anthony Rd, Addison', image: '/anthony.webp' },
    { address: '5340 Cascade Dr, Trenton', image: '/cascade.webp' },
    { address: '5401 Cascade Dr, Trenton', image: '/cascade2.webp' },
    { address: '1507 Clarence Ct, West Bend', image: '/clarence.webp' },
    { address: '819 Cumberland Ln, Port Washington', image: '/cumberland.webp' },
    { address: '716 E. Decorah, West Bend', image: '/decorah.webp' },
    { address: '2710 Esker Dr, West Bend', image: '/esker.webp' },
    { address: 'W243S7830 Evergreen Dr, Vernon', image: '/evergreen.webp' },
    { address: '10430 W. Fairlane Ave, Milwaukee', image: '/fairlane.webp' },
    { address: 'W182N12517 Fond Du Lac Ave, Germantown', image: '/fdlave.webp' },
    { address: '4812 Glen View Cir, West Bend', image: '/glenview.webp' },
    { address: '10120 W. Harrison Ave, West Allis', image: '/harrison.webp' },
    { address: 'N4552-N4554 Hickory Rd, Hustisford', image: '/hickory.webp' },
    { address: 'N9384 Idle Hour, Beaver Dam Lake', image: '/idle.webp' },
    { address: '631 N Kuester Ln, West Bend', image: '/kuester.webp' },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(listings.length / itemsPerPage);
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = listings.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        const listingsSection = document.getElementById('featured-listings');
        const navbarHeight = 80;
        const elementPosition = listingsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        const listingsSection = document.getElementById('featured-listings');
        const navbarHeight = 80;
        const elementPosition = listingsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const handleViewAll = () => {
    navigate('/all-listings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="featured-listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-emerald-800 mb-4">
            Featured Sold Properties
          </h2>
          <p className="text-lg text-amber-700 font-light">
            Help us get your home pictured here!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentListings.map((listing, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="h-56 bg-gradient-to-br from-amber-200 to-amber-400 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <p className="font-medium text-gray-800 text-lg mb-3">
                  {listing.address}
                </p>
                <span className="inline-block px-4 py-2 bg-emerald-800 text-white text-sm font-semibold rounded-full">
                  Sold
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Back Arrow */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`p-4 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-800 text-white hover:bg-emerald-700 hover:scale-110 shadow-lg'
            }`}
            aria-label="Previous page"
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
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Indicator */}
          <span className="text-gray-700 font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>

          {/* Next Arrow */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`p-4 rounded-full transition-all duration-300 ${
              currentPage === totalPages - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-800 text-white hover:bg-emerald-700 hover:scale-110 shadow-lg'
            }`}
            aria-label="Next page"
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
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAll}
            className="px-10 py-4 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-lg"
          >
            View All Sold Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;