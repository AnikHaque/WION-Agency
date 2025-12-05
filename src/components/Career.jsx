import { useState } from "react";
import { Briefcase, MapPin, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Career() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Front-End Developer",
      location: "Remote / Dhaka",
      type: "Full-time",
      posted: "2025-11-28",
      description: "We are looking for a talented Front-End Developer with React & Tailwind experience to join our dynamic team.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Remote / Chittagong",
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 text-center ">
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
      </div>

      {/* Jobs Listing */}
      <div className="max-w-6xl mx-auto mt-16 px-6 space-y-8">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition relative"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase /> {job.title}
              </h2>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {job.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-6 mb-4 text-gray-500">
              <span className="flex items-center gap-1"><MapPin /> {job.location}</span>
              <span className="flex items-center gap-1"><Calendar /> Posted: {job.posted}</span>
            </div>

            <p className="text-gray-700 mb-6">{job.description}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
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