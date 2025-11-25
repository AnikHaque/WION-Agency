import { useState } from "react";
import { useParams } from "react-router-dom";
import featuresData from "./data/featuresData";
import Navbar from "./shared/Navbar";
import ServiceGallary from "./ServiceGallary";
import Footer from "./Footer";

export default function FeatureDetails() {
  const { id } = useParams();
  const feature = featuresData.find((item) => item.id === id);

  const images = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  if (!feature) {
    return <h2 className="text-center mt-20">Feature not found</h2>;
  }

  return (
    <div>
      <Navbar />

      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT — Gallery */}
        <div>
          <ServiceGallary />

         
        </div>

        {/* RIGHT — Detailed Content */}
        <div className="flex flex-col justify-center">
          
          {/* Category badge */}
          <span className="px-4 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-semibold self-start mb-4">
            {feature.category}
          </span>

          <h1 className="text-4xl font-bold mb-4 leading-tight">{feature.title}</h1>

          <p className="text-gray-600 text-lg leading-relaxed ">
            {feature.longDescription}
          </p>

         

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">4.9★</h3>
              <p className="text-gray-600 text-sm mt-1">User Rating</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">12K+</h3>
              <p className="text-gray-600 text-sm mt-1">Active Users</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">98%</h3>
              <p className="text-gray-600 text-sm mt-1">Satisfaction</p>
            </div>
          </div>

          

        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-5 shadow rounded-xl border">
            🌟 <strong>High Performance:</strong> Optimized for fast loading and smooth experience.
          </li>
          <li className="bg-white p-5 shadow rounded-xl border">
            🔒 <strong>Secure System:</strong> End-to-end protection for user data.
          </li>
          <li className="bg-white p-5 shadow rounded-xl border">
            ⚡ <strong>Fast Integration:</strong> Easy to connect with existing apps.
          </li>
          <li className="bg-white p-5 shadow rounded-xl border">
            💼 <strong>Business-Ready:</strong> Includes analytics, tools & automation.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-5">
          <div className="p-5 bg-gray-50 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">How does this feature work?</h3>
            <p className="text-gray-600 mt-1">It works by using advanced algorithms to enhance user experience.</p>
          </div>

          <div className="p-5 bg-gray-50 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Can I integrate it with my website?</h3>
            <p className="text-gray-600 mt-1">Yes! It's fully compatible with any modern framework.</p>
          </div>

          <div className="p-5 bg-gray-50 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Do you provide support?</h3>
            <p className="text-gray-600 mt-1">Yes — we offer 24/7 premium support for all users.</p>
          </div>
        </div>
      </div>

      {/* CTA Footer Box */}
      <div className="max-w-6xl mx-auto mt-20 px-4 pb-24">
        <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="opacity-90 mb-6">Boost your business with our most advanced feature.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Explore Pricing
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
