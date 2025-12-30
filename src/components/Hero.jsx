const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-600 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat animate-float" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
               backgroundSize: '150px'
             }}>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fadeInUp">
          <img 
            src="/wkmplogo.webp" 
            alt="WKMP Logo" 
            className="h-32 md:h-40 w-auto"
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 animate-fadeInUp animation-delay-200">
          Wisconsin's Kettle Moraine Properties
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 opacity-95 animate-fadeInUp animation-delay-400">
          We are here for all of your Real Estate needs. Let over 50 years of combined experience go to work for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
          <a
            href="https://wihomes.com/br/property/default.asp?Broker=kettle1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-emerald-800 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Search Homes
          </a>
          <a
            href="https://wihomes.com/br/property/interactivemap.asp?broker=kettle1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
          >
            Map Search
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;