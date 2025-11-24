// Stats.jsx
import React, { useEffect, useState } from "react";

export function Stats() {
  const stats = [
    { number: 10, label: "Years of Experience", suffix: "+" },
    { number: 250, label: "Projects Completed", suffix: "+" },
    { number: 100, label: "Happy Clients", suffix: "+" },
    { number: 50, label: "Awards & Recognitions", suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementSpeed = 30; // ms per increment
    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.number / (2000 / incrementSpeed)); // 2 seconds animation
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(newCounts[index] + step, stat.number);
          }
          return newCounts;
        });
      }, incrementSpeed);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 text-lg max-w-2xl mx-auto">
          We are proud of the impact we've made. Our numbers speak for our dedication and expertise.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition duration-500"
            >
              <h3 className="text-5xl font-extrabold text-indigo-600 mb-2">
                {counts[idx]}
                {stat.suffix}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
