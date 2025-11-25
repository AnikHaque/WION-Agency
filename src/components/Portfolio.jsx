import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-indigo-600 text-lg font-semibold">
              Our Portfolio
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-snug">
              Our Recent Projects
            </h2>

            <p className="text-gray-600 text-base mt-4">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center mb-14 gap-3">
            {["all", "branding", "design", "marketing", "development"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleProject(item)}
                  className={`py-2.5 px-6 rounded-lg text-sm font-semibold transition-all border 
                    ${
                      showCard === item
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-indigo-600 hover:text-white"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <PortfolioCard
              ImageHref="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-project-thumb2.png"
              category="branding"
              title="VoltEdge"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-project-thumb1.png"
              category="App Design"
              title="Lunora"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-project-thumb4.png"
              category="branding"
              title="Haus&Co"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg"
              category="development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-04.jpg"
              category="design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-05.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

// =========================== CARD COMPONENT ===========================

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  const shouldShow =
    showCard === "all" || showCard === category.toLowerCase();

  return (
    <div className={`${shouldShow ? "block" : "hidden"}`}>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={ImageHref}
            alt="portfolio"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <span className="text-indigo-600 text-sm font-medium">
            {category}
          </span>

          <h3 className="text-xl font-semibold mt-2 text-gray-900">
            {title}
          </h3>

          <a
            href={buttonHref}
            className="inline-block mt-5 py-2.5 px-8 rounded-lg border border-indigo-600 text-indigo-600 font-medium text-sm hover:bg-indigo-600 hover:text-white transition"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
