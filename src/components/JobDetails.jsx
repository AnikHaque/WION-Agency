import { useState } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function JobDetails() {
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
    similarJobs: [
      { id: 1, title: "React Developer", company: "TechCorp" },
      { id: 2, title: "UI/UX Developer", company: "DesignPro" },
    ],
  });

  const [showResponsibilities, setShowResponsibilities] = useState(true);
  const [showRequirements, setShowRequirements] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero / Job Title */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6 rounded-b-3xl text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{job.title}</h1>
        <p className="text-lg mb-6">{job.company}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <span className="flex items-center gap-1"><Briefcase className="w-5 h-5" /> {job.type}</span>
          <span className="flex items-center gap-1"><MapPin className="w-5 h-5" /> {job.location}</span>
          <span className="flex items-center gap-1"><Calendar className="w-5 h-5" /> Posted: {job.posted}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Apply Now
        </motion.button>
      </div>

      {/* Job Description */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
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

        {/* Skills / Tags */}
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

        {/* Similar Jobs */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar Jobs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {job.similarJobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
              >
                <h4 className="text-lg font-bold mb-2">{job.title}</h4>
                <p className="text-gray-600">{job.company}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
