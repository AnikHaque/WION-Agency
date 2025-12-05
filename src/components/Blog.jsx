import { useState } from "react";
import { Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts] = useState([
    {
      id: 1,
      title: "Top 10 UI/UX Trends in 2025",
      author: "Ayesha Rahman",
      date: "2025-11-28",
      tags: ["UI/UX", "Design", "Trends"],
      excerpt: "Discover the top UI/UX trends that will shape digital experiences in 2025...",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      author: "Michael Clark",
      date: "2025-11-25",
      tags: ["React", "Web Development", "Scaling"],
      excerpt: "Learn best practices for creating scalable and maintainable React applications...",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "How to Improve Website Performance",
      author: "Sophia Ahmed",
      date: "2025-11-20",
      tags: ["Performance", "Optimization", "Web"],
      excerpt: "Boost your website performance with these essential techniques and tips...",
      image: "/blog3.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-6 text-center rounded-b-3xl">
        <h1 className="text-5xl font-extrabold mb-4">Our Blog & Insights</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Stay updated with the latest trends, tips, and insights from our agency experts.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <div className="relative h-64 w-full">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3 text-gray-500 text-sm">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-28 px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Get the latest articles, insights, and resources delivered straight to your inbox.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Subscribe Now
        </motion.button>
      </div>
    </div>
  );
}