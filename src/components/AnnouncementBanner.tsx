import { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#B5A642] text-white py-2 px-4 text-center relative">
      <span>
        Zepheon will be launching new AI-powered consulting services.{" "}
        <b>Coming soon.</b>
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  );
};

export default AnnouncementBanner;
