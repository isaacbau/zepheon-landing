import illustrationImage from "../assets/illustration.png";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl leading-tight font-playfair">
            Pioneering strategic
            <br />
            solutions for the
            <br />
            evolving business
            <br />
            landscape
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
      </div>
    </div>
  );
};

export default Home;
