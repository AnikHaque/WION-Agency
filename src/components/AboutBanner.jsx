import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/inner-ab2-thumb10.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Text */}
      <h1 className="relative text-white text-4xl md:text-5xl font-semibold bg-gray-500 p-4">
        About Us
      </h1>
    </div>
  );
};

export default AboutBanner;
