// PortfolioPreview.jsx
import React from "react";

export function PortfolioPreview() {
  const items = [
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "App Design", category: "Mobile App" },
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "Website Redesign", category: "Web Design" },
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "Dashboard UI", category: "UI/UX" },
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "E-commerce Platform", category: "Web App" },
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "Landing Page", category: "Marketing" },
    { img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png", title: "Branding Design", category: "Creative" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-black">Our Portfolio</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          A showcase of our latest projects. We combine creativity, innovation, and technology to deliver outstanding results.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured Project */}
          <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={items[0].img}
              alt={items[0].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-3xl font-bold text-white">{items[0].title}</h3>
              <p className="text-white mt-2">{items[0].category}</p>
            </div>
          </div>

          {/* Small Projects */}
          <div className="grid grid-cols-1 gap-6">
            {items.slice(1).map((p, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-white mt-1">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-12 px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
          View All Projects
        </button>
      </div>
    </section>
  );
}
