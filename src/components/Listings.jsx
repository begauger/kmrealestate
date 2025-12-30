const Listings = () => {
  const listings = [
    {
      address: '4812 Glen View Cir, West Bend',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/4812-Glenview-Ct.-West-Bend.jpg'
    },
    {
      address: '2710 Esker Dr, West Bend',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/2710-Esker-Dr.-West-Bend-2.jpg'
    },
    {
      address: 'N2170 N Pine Beach Rd, Oostburg',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/N2170-N.-Pine-Beach-Rd.-Oosburg.pg_.jpg'
    },
    {
      address: '529 McKinley Ave, Hartford',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/529-McKinley-Ave.-Hartford.jpg'
    },
    {
      address: '819 Cumberland Ln, Port Washington',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/819Cumberland-Ln-Port-Washingtonjpg.jpg'
    },
    {
      address: '705-707 N. Milwaukee St, Port Washington',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/705-707-N.-Milwaukee-St.jpg'
    },
    {
      address: 'W182N12517 Fond Du Lac Ave, Germantown',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/W182N12517-Fond-Du-Lack-Ave.-Germantown.jpg'
    },
    {
      address: '1507 Clarence Ct, West Bend',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/1507-Clarence-Ct.-West-Bend.jpg'
    },
    {
      address: '619 Tamarack Dr, West Bend',
      image: 'https://wkmp.com/wp-content/uploads/2023/11/619-Tamarack-Dr-W-West-Bend.jpg'
    }
  ];

  return (
    <section id="listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-emerald-800 mb-4">
            Recently Sold Properties
          </h2>
          <p className="text-lg text-amber-700 font-light">
            Help us get your home pictured here!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
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
      </div>
    </section>
  );
};

export default Listings;