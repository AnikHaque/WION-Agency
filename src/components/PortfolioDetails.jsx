import { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Github, Globe, Calendar, Layers, TerminalSquare, Building, ArrowRight } from "lucide-react";

export default function ITProjectDetails() {
  const [selectedImage, setSelectedImage] = useState("https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg");

  const gallery = [
    "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
    "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
    "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
    "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
    "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
  ];

  const features = [
    "AI-powered automation workflow",
    "Role-based user management",
    "Advanced analytics dashboards",
    "Cloud-based real-time sync",
    "Enterprise-grade security system",
    "REST API + Webhook integration",
  ];

  const techStack = [
    "React.js", "Node.js", "Firebase", "MongoDB", "Tailwind CSS", "Framer Motion", "Docker", "AWS"
  ];

  const reviews = [
    { id: 1, name: "Client A", rating: 5, comment: "Outstanding UI and flawless functionality!" },
    { id: 2, name: "Client B", rating: 4, comment: "Fast, scalable and premium quality work!" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16">

      {/* HERO SECTION */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          AI Workflow Automation Platform
        </h1>
        <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
          A modern AI-powered enterprise solution designed to automate workflows, analyze performance, and optimize business operations with intelligent cloud technology.
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[ 
          { icon: <Building />, label: "Client", value: "Tech Innovators Ltd." },
          { icon: <Calendar />, label: "Duration", value: "3 Months" },
          { icon: <Layers />, label: "Category", value: "SaaS / Enterprise" },
        ].map((item, idx) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={idx}
            className="p-6 rounded-3xl shadow-xl border bg-white/70 backdrop-blur-xl flex items-center gap-4"
          >
            <div className="text-blue-600">{item.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="font-bold text-lg">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <motion.img
        src={selectedImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl shadow-2xl w-full h-[430px] object-cover border"
      />

      {/* FEATURES SECTION */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 p-4 rounded-2xl shadow bg-white border"
            >
              <CheckCircle className="text-green-600" />
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROJECT DESCRIPTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Project Description</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            This AI workflow platform allows businesses to automate manual tasks, monitor live operations, and manage teams with powerful data-driven insights. The system includes real-time monitoring, deep analytics, and enterprise-grade security.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            The platform integrates seamlessly with CRM, ERP, cloud storage, and external APIs, creating a fully automated digital ecosystem.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="bg-white border shadow-xl p-8 rounded-3xl space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2"><TerminalSquare /> Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Project Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {gallery.map((img, idx) => (
            <motion.img
              whileHover={{ scale: 1.08 }}
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className="rounded-xl shadow-lg cursor-pointer h-40 object-cover border"
            />
          ))}
        </div>
      </div>

      {/* REVIEWS - CAROUSEL */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Client Reviews</h2>

        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[320px] p-6 rounded-3xl shadow-lg border bg-white space-y-2 hover:scale-105 transition cursor-pointer"
              >
                <h3 className="font-bold text-xl">{review.name}</h3>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel CSS */}
        <style>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            width: max-content;
            animation: slide 12s linear infinite;
          }
        `}</style>
      </div>

      {/* LINKS */} 
      <div className="flex flex-wrap gap-4 pt-6">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 shadow hover:bg-blue-700 transition">
          <Globe /> Live Demo
        </a>
        <a className="px-6 py-3 bg-gray-900 text-white rounded-xl flex items-center gap-2 shadow hover:bg-black transition">
          <Github /> GitHub Repo
        </a>
      </div>

      {/* CTA SECTION */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-xl text-white">
        <h2 className="text-4xl font-bold mb-4">Want a Similar Premium IT Project?</h2>
        <p className="text-lg mb-6">I can design & develop full professional systems with modern UI/UX and enterprise features.</p>
        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-md flex items-center gap-2 mx-auto hover:scale-105 transition">
          Contact Now <ArrowRight />
        </button>
      </div>

    </div>
  );
}
