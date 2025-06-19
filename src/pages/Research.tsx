const Research = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-playfair mb-6 text-gray-900">
            Research
          </h1>
        </div>

        {/* miniSAM Featured Product */}
        <div className="mb-20">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <span className="text-sm text-gray-500 font-mono">
                01 — FLAGSHIP
              </span>
              <h2 className="text-4xl font-bold font-playfair mt-4 mb-4 text-gray-900">
                miniSAM
              </h2>
              <p className="text-lg text-gray-600 font-playfair max-w-2xl mx-auto">
                Browser-native image segmentation without servers or GPUs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://minisam.isaacbs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <span>Try Demo</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/isaacbau/miniSAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Consumer AI Applications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-playfair mb-8 text-center text-gray-900">
            Consumer Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">👗</span>
              </div>
              <h3 className="font-semibold font-playfair mb-2 text-gray-800">
                Fashion
              </h3>
              <p className="text-sm text-gray-600 font-playfair">
                Virtual try-ons on mobile devices
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">🏥</span>
              </div>
              <h3 className="font-semibold font-playfair mb-2 text-gray-800">
                Health
              </h3>
              <p className="text-sm text-gray-600 font-playfair">
                Privacy-first local processing
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">🛍️</span>
              </div>
              <h3 className="font-semibold font-playfair mb-2 text-gray-800">
                Products
              </h3>
              <p className="text-sm text-gray-600 font-playfair">
                Accessible AI for small brands
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full">
            <p className="font-playfair">
              Available now for developers worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
