"use client";

import { useRef, useEffect, useState } from "react";

// ===== Icons =====
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaWordpress,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, 
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobexd,
  SiTypescript,
  SiAngular,
  SiSass,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const coreFrontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={36} /> },
  ];

  const frameworks = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: "Angular", icon: <SiAngular className="text-[#DD0031]" size={36} /> },
    { name: "SCSS", icon: <SiSass className="text-[#CC6699]" size={36} /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-500" size={36} /> },
  ];

  const backendDb = [
    { name: "Node.js", icon: <FaNodeJs className="text-[#539E43]" size={36} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={36} /> },
    { name: "MySQL", icon: <SiMysql className="text-[#00618A]" size={36} /> },
    { name: "Databases", icon: <FaDatabase className="text-gray-300" size={36} /> },
  ];

  const toolsPlatforms = [
    { name: "Git", icon: <FaGit className="text-[#F05032]" size={36} /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" size={36} /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" size={36} /> },
  ];

  const designSuite = [
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" size={36} /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" size={36} /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-[#9999FF]" size={36} /> },
    { name: "After Effects", icon: <SiAdobeaftereffects className="text-[#9999FF]" size={36} /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-[#FF61F6]" size={36} /> },
  ];

  const office = [
    { name: "Word", icon: <FaFileWord className="text-[#2B579A]" size={36} /> },
    { name: "Excel", icon: <FaFileExcel className="text-[#217346]" size={36} /> },
    { name: "PowerPoint", icon: <FaFilePowerpoint className="text-[#D24726]" size={36} /> },
  ];

  const Card = ({ icon, label, bar, glow }) => (
    <div
      className={`relative w-40 h-28 rounded-xl border border-white/5 bg-gray-800/80
      shadow-sm flex flex-col items-center justify-center
      transition-all duration-300 hover:-translate-y-1
      hover:shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,0,0,0.6)]
      ${glow}`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${bar}`} />
      {icon}
      <span className="mt-2 text-sm font-medium text-gray-200">{label}</span>
    </div>
  );

  const Section = ({ title, items, bar, glow, titleClass }) => (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <h3 className={`text-lg md:text-xl font-semibold ${titleClass}`}>{title}</h3>
        <div className={`mx-auto mt-2 h-[3px] w-24 rounded-full ${bar}`} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {items.map((i) => (
          <Card key={i.name} icon={i.icon} label={i.name} bar={bar} glow={glow} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A concise overview of my core competencies, technologies, and tools used to build modern,
            scalable, and user-focused web applications.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Section
            title="Core Frontend"
            items={coreFrontend}
            bar="bg-gradient-to-r from-orange-500 to-yellow-500"
            glow="hover:ring-1 hover:ring-orange-400/40"
            titleClass="text-orange-400"
          />

          <Section
            title="Frameworks & Styling"
            items={frameworks}
            bar="bg-gradient-to-r from-pink-500 to-purple-500"
            glow="hover:ring-1 hover:ring-pink-400/40"
            titleClass="text-pink-400"
          />

          <Section
            title="Backend & Databases"
            items={backendDb}
            bar="bg-gradient-to-r from-green-500 to-emerald-600"
            glow="hover:ring-1 hover:ring-emerald-400/40"
            titleClass="text-green-400"
          />

          <Section
            title="Tools & Platforms"
            items={toolsPlatforms}
            bar="bg-gradient-to-r from-gray-500 to-gray-700"
            glow="hover:ring-1 hover:ring-gray-400/30"
            titleClass="text-gray-300"
          />

          <Section
            title="Design Suite (Adobe)"
            items={designSuite}
            bar="bg-gradient-to-r from-blue-500 to-pink-500"
            glow="hover:ring-1 hover:ring-blue-400/40"
            titleClass="text-blue-400"
          />

          <Section
            title="Office & Documentation"
            items={office}
            bar="bg-gradient-to-r from-blue-600 to-green-600"
            glow="hover:ring-1 hover:ring-blue-300/40"
            titleClass="text-blue-300"
          />
        </div>
      </div>
    </section>
  );
}
 