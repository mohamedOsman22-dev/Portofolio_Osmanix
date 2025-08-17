"use client"
import { FaGlobe } from "react-icons/fa";

export default function Languages() {
  const languages = [
    { name: "Arabic", level: "Native", percent: 100 },
    { name: "English", level: "Proficient", percent: 80 },
  ];

  return (
    <section id="languages" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Languages
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Languages I actively use in communication and work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-[#0e1420] rounded-2xl p-6 shadow-lg border border-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <FaGlobe className="opacity-70" />
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                </div>
                <span className="text-sm px-2 py-1 rounded-full bg-white/5">
                  {lang.level}
                </span>
              </div>

              <div className="h-2 w-full rounded bg-white/10">
                <div
                  className="h-full rounded bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
