import { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Image as ImageIcon } from "lucide-react";

export default function ProjectDetails() {
  const [selectedImage, setSelectedImage] = useState("/images/project/main.jpg");

  const gallery = [
    "/images/project/main.jpg",
    "/images/project/1.jpg",
    "/images/project/2.jpg",
    "/images/project/3.jpg",
  ];

  const reviews = [
    {
      id: 1,
      name: "Rahim Uddin",
      rating: 5,
      comment: "This IT product transformed our workflow completely. Highly recommended!",
    },
    {
      id: 2,
      name: "Sara Khan",
      rating: 4,
      comment: "Smooth UI, stable performance, excellent customer service!",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-14">
      {/* HEADER */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">IT Product Name</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A next-generation IT management solution designed for performance,
          automation, and enterprise-grade efficiency.
        </p>
      </div>

      {/* MAIN PREVIEW SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Large Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img
            src={selectedImage}
            alt="Project"
            className="rounded-3xl w-full shadow-xl h-[430px] object-cover border"
          />
        </motion.div>

        {/* Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">About This Product</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            This enterprise-grade system helps teams automate tasks, visualize
            analytics, and manage IT operations with intelligent cloud-powered
            workflows and advanced reporting dashboards.
          </p>

          <div className="space-y-3">
            <h3 className="font-semibold text-xl">Core Features</h3>
            <ul className="space-y-2">
              {["Cloud-powered workflow automation","Smart analytics dashboard","User role & access management","API integration & security layer"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ImageIcon /> Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {gallery.map((img, idx) => (
            <motion.img
              whileHover={{ scale: 1.05 }}
              key={idx}
              src={img}
              alt="Gallery"
              onClick={() => setSelectedImage(img)}
              className="rounded-xl shadow-md cursor-pointer h-36 object-cover border"
            />
          ))}
        </div>
      </div>

      {/* USER REVIEWS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl border shadow-md bg-white space-y-2"
            >
              <h3 className="font-bold text-xl">{review.name}</h3>

              <div className="flex text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div className="bg-gray-100 border p-8 rounded-3xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Additional Information</h2>
        <p className="text-gray-700 leading-relaxed">
          The system includes future-ready modules such as AI-powered task
          prediction, enterprise security protocols, and extended API
          compatibility for seamless connectivity with business ecosystems.
        </p>
      </div>
    </div>
  );
}