import { useState } from "react";
import { MapPin, Calendar, Briefcase, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function JobDetailsPageWithForm() {
  const [job] = useState({
    title: "Senior Front-End Developer",
    company: "Innovatech Solutions",
    location: "Dhaka, Bangladesh (Remote Option)",
    type: "Full-time",
    posted: "2025-12-01",
    description: `We are looking for a passionate Senior Front-End Developer to join our dynamic team. You will work on exciting projects and contribute to building innovative web applications with modern technologies.`,
    responsibilities: [
      "Develop responsive web applications using React and Tailwind CSS",
      "Collaborate with UI/UX designers and backend developers",
      "Write clean, maintainable, and efficient code",
      "Mentor junior developers and review code",
    ],
    requirements: [
      "3+ years experience in front-end development",
      "Strong knowledge of React, Redux, and modern JavaScript",
      "Experience with Tailwind CSS and responsive design",
      "Good understanding of version control (Git)",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Redux"],
  });

  const [showResponsibilities, setShowResponsibilities] = useState(true);
  const [showRequirements, setShowRequirements] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6  text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{job.title}</h1>
        <p className="text-lg mb-6">{job.company}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <span className="flex items-center gap-1"><Briefcase className="w-5 h-5" /> {job.type}</span>
          <span className="flex items-center gap-1"><MapPin className="w-5 h-5" /> {job.location}</span>
          <span className="flex items-center gap-1"><Calendar className="w-5 h-5" /> Posted: {job.posted}</span>
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-7xl mx-auto mt-12 px-6 grid md:grid-cols-3 gap-10">
        {/* Left Column: Job Details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Description</h2>
          <p className="text-gray-700 mb-6">{job.description}</p>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
              onClick={() => setShowResponsibilities(!showResponsibilities)}
            >
              Responsibilities
              <span>{showResponsibilities ? "-" : "+"}</span>
            </h3>
            {showResponsibilities && (
              <ul className="list-disc list-inside mt-3 text-gray-700">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
              onClick={() => setShowRequirements(!showRequirements)}
            >
              Requirements
              <span>{showRequirements ? "-" : "+"}</span>
            </h3>
            {showRequirements && (
              <ul className="list-disc list-inside mt-3 text-gray-700">
                {job.requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 text-purple-800 font-semibold text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 sticky top-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Apply for this job</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition">
              <Upload className="w-5 h-5 text-gray-500" />
              <span>Upload CV / Resume</span>
              <input type="file" className="hidden" />
            </label>
            <textarea
              placeholder="Cover Letter / Message"
              rows={4}
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition mt-2"
              type="submit"
            >
              Submit Application
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
