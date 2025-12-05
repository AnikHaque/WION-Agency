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
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      author: "Michael Clark",
      date: "2025-11-25",
      tags: ["React", "Web Development", "Scaling"],
      excerpt: "Learn best practices for creating scalable and maintainable React applications...",
      image: "https://miro.medium.com/v2/resize:fit:2000/1*MTLaP1Vvhs8Lc-SCb8-5kA.png",
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
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-6 text-center  overflow-hidden">
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