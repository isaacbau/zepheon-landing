import illustrationImage from "../assets/illustration.png";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-playfair">
            Deep
            <br />
            learning
            <br />
            for enterprise
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustrationImage}
            alt="Zepheon Illustration"
            className={`max-w-full md:max-w-md h-auto transition-opacity duration-1000 ${
              isLoaded ? "opacity-100 animate-pulse-subtle" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <p className="text-sm mt-4 text-gray-600 max-w-md">
          We bring machine learning solutions to companies of any size, helping
          them unlock the power of AI without the complexity and overhead.
        </p>
      </div>
    </div>
  );
};

export default Home;
