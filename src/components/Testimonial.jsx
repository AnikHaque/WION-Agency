// Testimonials.jsx
import React, { useState, useEffect } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      text: "Amazing work! The team delivered exactly what we needed, on time and beyond expectations.",
      img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-t1.png",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Head, BrandCo",
      text: "Highly professional and creative. They transformed our digital presence completely.",
      img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-t1.png",
    },
    {
      name: "Michael Brown",
      role: "Founder, StartUpX",
      text: "The best agency experience I've ever had. Truly dedicated team and excellent results.",
      img: "https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-t1.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-t-bg.png')" }}
    >
      <div className="absolute inset-0  bg-opacity-60"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full px-4"
              >
                <div className="bg-white text-gray-800 rounded-2xl p-20 shadow-lg relative">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-indigo-600"
                  />
                  <p className="mt-4 text-lg">{t.text}</p>
                  <h4 className="mt-6 font-semibold text-indigo-600">{t.name}</h4>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === current ? "bg-indigo-600" : "bg-white bg-opacity-50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
