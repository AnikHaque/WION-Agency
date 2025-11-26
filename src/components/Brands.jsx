import React from "react";

const CompanyLogos = () => {
  const logos = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/clickup.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/airtable.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/miro.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/huawei.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/asana.svg",
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-0 w-full mt-20">
      <h3 className="text-3xl md:text-4xl font-semibold text-slate-600 text-center">
        Trusted by world's leading companies
      </h3>

      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-14">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200"
          >
            <img src={logo} alt="Company Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogos;
