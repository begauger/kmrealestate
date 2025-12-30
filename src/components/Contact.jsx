const Contact = () => {
  const agents = [
    {
      name: 'Martin Knuth',
      role: 'Real Estate Professional',
      phone: '262-675-0106',
      email: 'martin@wkmp.com',
      image: '/marty.webp',
    },
    {
      name: 'Robert Hart',
      role: 'Real Estate Broker',
      phone: '262-689-5388',
      email: 'bob@wkmp.com',
      image: '/robert.webp',
    }
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-emerald-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-amber-700 font-light">
            Ready to start your real estate journey? Reach out to our team today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Photo with subtle green background */}
              <div className="h-64 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-2">
                  {agent.role}
                </p>
                <h3 className="text-3xl font-serif font-semibold text-emerald-800 mb-6">
                  {agent.name}
                </h3>

                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {agent.phone}
                    </a>
                    <button
                      onClick={() => copyToClipboard(agent.phone, 'Phone number')}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Copy phone number"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {agent.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(agent.email, 'Email')}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Copy email"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;