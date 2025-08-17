// components/Education.jsx
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Education (Computer Science)",
      school: "The Egyptian E-Learning University (EELU)",
      location: "Assiut, Egypt",
      period: "Jan 2021 – Jun 2025",
      details:
        "Focused on full-stack web development, programming, and database management with hands-on academic projects and practical training.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-4xl mx-auto">
          Academic background and qualifications.
        </p>

        {/* Education Cards */}
        <div className="flex justify-center items-center">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="bg-[#0e1420] rounded-2xl p-8 shadow-lg border border-white/5 mx-auto w-full max-w-4xl"
            >
              <div className="flex flex-col h-full justify-between">
                {/* Degree & School */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{ed.degree}</h3>
                  <p className="text-gray-300 mb-2 text-lg">{ed.school}</p>
                  <p className="text-gray-400 mt-4 text-base leading-relaxed">{ed.details}</p>
                </div>

                {/* Location & Period */}
                <div className="flex items-center justify-between mt-6 text-base text-gray-400">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-400" /> {ed.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-yellow-400" /> {ed.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
