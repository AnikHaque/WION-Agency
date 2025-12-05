import { useState } from "react";
import { Calendar, User, Tag, Heart } from "lucide-react";
import { motion } from "framer-motion";
// Import core Swiper and modules correctly
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import Navigation as a module from swiper
import { Navigation } from "swiper/modules";



export default function BlogDetails() {
  const [post] = useState({
    title: "Top 10 UI/UX Trends in 2025",
    author: "Ayesha Rahman",
    date: "2025-11-28",
    category: "Design",
    tags: ["UI/UX", "Design", "Trends"],
    readingTime: "5 min read",
    image: "/blog1.jpg",
    gallery: ["/blog1.jpg", "/blog2.jpg", "/blog3.jpg"],
    content: [
      "UI/UX design continues to evolve, introducing new trends and best practices for 2025. In this article, we explore the top trends that will shape digital experiences.",
      "1. Minimalism and clean interfaces for better usability.",
      "2. Dark mode and accessibility-focused design.",
      "3. Interactive micro-animations to enhance user engagement.",
      "4. Voice user interface and AI-driven experiences.",
      "5. Advanced personalization and adaptive layouts.",
      "Designers and developers need to stay updated to provide the best user experiences."
    ]
  });

  const [comments, setComments] = useState([
    { id: 1, name: "Michael", message: "Great insights! Thanks for sharing." },
    { id: 2, name: "Sophia", message: "Very informative post." }
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, name: "Guest", message: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero / Featured Image */}
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
          <div className="flex gap-4 text-sm md:text-base mt-2 flex-wrap justify-center">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {post.category}</span>
            <span className="flex items-center gap-1">{post.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8 text-gray-700">
          {/* Post Content */}
          {post.content.map((para, idx) => (
            <p key={idx} className={para.startsWith("1.") ? "pl-4 list-decimal" : ""}>{para}</p>
          ))}

          {/* Image Gallery / Slider */}
          <div className="mt-6">
           <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={10}
  slidesPerView={1}
>
  {post.gallery.map((img, idx) => (
    <SwiperSlide key={idx}>
      <img
        src={img}
        alt={`Gallery ${idx + 1}`}
        className="w-full h-64 object-cover rounded-2xl shadow-md"
      />
    </SwiperSlide>
  ))}
</Swiper>


          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-200 to-blue-200 text-purple-800 rounded-full text-sm font-semibold">{tag}</span>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md mt-10">
            <img src="/author.jpg" alt={post.author} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h4 className="font-bold text-lg">{post.author}</h4>
              <p className="text-gray-600">UI/UX Designer and Front-End Developer with 8+ years of experience.</p>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Comments</h3>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-2xl p-4 shadow-md">
                  <p className="font-semibold">{comment.name}</p>
                  <p>{comment.message}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="mt-6 flex flex-col gap-3">
              <textarea
                placeholder="Add a comment..."
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
                type="submit"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sticky top-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-4">Related Posts</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer transition">Building Scalable React Apps</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Effective Branding Strategies</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Improve Website Performance</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer transition">UI/UX</li>
              <li className="hover:text-blue-600 cursor-pointer transition">React</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Design</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Web Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter / CTA */}
      <div className="text-center mt-20 px-6 py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Get the latest articles and insights directly to your inbox.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition"
        >
          Subscribe Now
        </motion.button>
      </div>
    </div>
  );
}
