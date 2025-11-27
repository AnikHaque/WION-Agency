import PortfolioBreadcrumb from "../utils/PortfolioBredcrumb";

const AboutBanner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/inner-ab2-thumb10.png')",
      }}
    >
      {/* WRAPPER TO STACK HEADING + BREADCRUMB */}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold bg-gray-500 p-4">
          About Us
        </h1>

        {/* Breadcrumb under heading */}
        <div className=" bg-opacity-40 px-4 py-1 rounded-md">
          <PortfolioBreadcrumb />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
