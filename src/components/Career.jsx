import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import PortfolioBreadcrumb from "../utils/PortfolioBredcrumb";

export default function CareerPage() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Front-End ",
      location: "Remote / Dhaka",
      type: "Full-time",
      posted: "2025-11-28",
      description: "We are looking for a talented Front-End Developer with React & Tailwind experience to join our dynamic team.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Remote / Ctg",
      type: "Contract",
      posted: "2025-11-25",
      description: "Design stunning and intuitive interfaces for web and mobile applications in collaboration with developers and clients.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      location: "Remote / Anywhere",
      type: "Full-time",
      posted: "2025-11-20",
      description: "Develop and maintain full-stack web applications, integrating front-end UI and back-end services seamlessly.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      {/* <div className="bg-gray-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Join Our Team</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Be part of a creative and innovative agency. Check our open positions and apply today to shape the future with us.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Explore Opportunities
        </motion.button>
      </div> */}
       <div
            className="w-full h-[50vh] bg-cover bg-center relative flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/inner-ab2-thumb10.png')",
            }}
          >
            {/* WRAPPER TO STACK HEADING + BREADCRUMB */}
            <div className="flex flex-col items-center space-y-4">
              <h1 className="relative text-white text-4xl md:text-5xl font-semibold bg-gray-500 p-4">
                Join Our Team
              </h1>
      
              {/* Breadcrumb under heading */}
              <div className=" bg-opacity-40 px-4 py-1 rounded-md">
                <PortfolioBreadcrumb />
              </div>

              <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Explore Opportunities
        </motion.button>
            </div>
            
          </div>

      {/* Jobs Listing - Unique Cards */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-2xl border-l-4 border-blue-600 hover:border-purple-600 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 text-gray-500">
              <span className="flex items-center gap-1"><MapPin /> {job.location}</span>
              <span className="flex items-center gap-1"><Calendar /> {job.posted}</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">{job.type}</span>
            </div>

            <p className="text-gray-700 mb-15">{job.description.slice(0,100)}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-purple-600 transition"
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-28 px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Can’t find your role?</h2>
        <p className="mb-6">Send us your resume and we will keep you in mind for future opportunities.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Submit Your Resume
        </motion.button>
      </div>
    </div>
  );
}