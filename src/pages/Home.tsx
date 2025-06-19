import illustrationImage from "../assets/illustration.png";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-playfair">
              Deep
              <br />
              learning
              <br />
              for enterprise
            </h1>
            <p className="text-sm text-gray-600 max-w-md">
              We unlock AI for businesses without the complexity. Our research
              makes consumer AI accessible to all founders through GPU-free
              local models.
            </p>
          </div>

          {/* Right column with image */}
          <div className="flex justify-center items-center">
            <img
              src={illustrationImage}
              alt="Zepheon Illustration"
              className={`w-full max-w-lg transition-opacity duration-1000 ${
                isLoaded ? "opacity-100 animate-pulse-subtle" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
