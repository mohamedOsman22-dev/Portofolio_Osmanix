"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";
const TEXT_TERTIARY = "text-gray-400";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = [
      "Full Stack Developer",
      "React & Node.js & Angular Developer",
      "Skilled in API Integration & Databases",
      "UI/UX Enthusiast",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;
      typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-left overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* النص والأزرار */}
        <div className="flex-1 md:pr-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span
              className="
                bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
                bg-clip-text text-transparent whitespace-nowrap animate-gradient
              "
            >
              Mohamed Osman
            </span>
          </h1>

          <div className={`text-xl md:text-2xl ${TEXT_SECONDARY} mb-8 h-8`}>
            I'm a{" "}
            <span ref={textRef} className={`${TEXT_PRIMARY} font-medium`} />
          </div>

          <p className={`max-w-xl ${TEXT_TERTIARY} mb-10`}>
            Dynamic Full Stack Developer skilled in JavaScript, HTML, CSS,
            Python, React, Angular and Node.js, with expertise in API
            integration, performance optimization, and creating responsive,
            user-focused designs. Known for teamwork, adaptability, and
            delivering impactful, business-aligned solutions, with additional
            expertise in graphic design to enhance visual appeal and usability.
          </p>

          <div className="flex gap-4">
            <Link
              href="#projects"
              className={`px-6 py-3 rounded-lg ${PRIMARY_GRADIENT} ${TEXT_PRIMARY} font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105`}
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className={`px-6 py-3 rounded-lg ${SECONDARY_BG} ${TEXT_PRIMARY} font-medium transition-all hover:scale-105`}
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* الصورة الشخصية - دائرة احترافية كبيرة */}
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
          <div className="relative group">
            {/* الهالة الخارجية */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 opacity-70 blur-2xl group-hover:opacity-100 transition duration-500"
            />
            {/* إطار الصورة */}
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl ring-8 ring-purple-500/60 bg-gray-900">
              <img
                src="/profile.png"
                alt="Mohamed Osman"
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(0.97) contrast(1.08)",
                  objectPosition: "center top",
                }}
              />
              {/* Overlay شفاف لإحساس 3D */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* سهم النزول */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
