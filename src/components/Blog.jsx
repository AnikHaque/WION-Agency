import { useState } from "react";
import { Calendar, User, Tag, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function StylishBlogPage() {
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
    {
      id: 4,
      title: "Effective Branding Strategies",
      author: "David Li",
      date: "2025-11-18",
      tags: ["Branding", "Marketing"],
      excerpt: "Learn how to build a strong brand and market your business effectively...",
      image: "/blog4.jpg",
    },
  ]);

  const [selectedTag, setSelectedTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tags = ["All", "UI/UX", "Design", "Trends", "React", "Web Development"];

  const filteredPosts = posts.filter(post =>
    (selectedTag === "All" || post.tags.includes(selectedTag)) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-20">
      {/* Hero Section with Featured Slider */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-6 text-center rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        <h1 className="relative text-5xl font-extrabold mb-4 z-10">Our Blog & Insights</h1>
        <p className="relative max-w-2xl mx-auto text-lg z-10 mb-6">
          Stay updated with the latest trends, tips, and insights from our agency experts.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative z-10 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Explore Posts
        </motion.button>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto mt-12 px-6 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedTag(tag)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full font-semibold transition ${selectedTag === tag ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Blog Posts Grid - Glassmorphic Cards */}
      <div className="max-w-7xl mx-auto mt-8 px-6 grid md:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl border border-gray-200 transition relative"
          >
            <div className="relative h-64 w-full">
              <img src={post.image} alt={post.title} className="object-cover w-full h-full rounded-t-3xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3 text-gray-500 text-sm">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm bg-gradient-to-r from-purple-200 to-blue-200 text-purple-800 px-3 py-1 rounded-full font-semibold">{tag}</span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <div className="text-center mt-28 px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/cta-bg.png')] bg-cover bg-center"></div>
        <h2 className="relative text-4xl font-bold mb-4 z-10">Subscribe to Our Newsletter</h2>
        <p className="relative mb-6 z-10">Get the latest articles, insights, and resources delivered straight to your inbox.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative z-10 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Subscribe Now
        </motion.button>
      </div>
    </div>
  );
}