'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaPython, FaReact, FaGithub, FaMicrochip } from 'react-icons/fa';
import { SiTensorflow, SiCplusplus } from 'react-icons/si';
import SkillBar from '@/app/components/SkillBar';



export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const scrollLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
  ];

  return (
    <main className="scroll-smooth">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl text-blue-900">Luciano Dagnillo</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {scrollLinks.map(({ label, href }) => (
                <a key={label} href={href} className="text-black hover:text-blue-600">
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
              {scrollLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-black"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>


      {/* Sections */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img 
          src="/profile.jpg" 
          alt="Luciano Dagnillo" 
          className="w-60 h-60 rounded-full mt-6 shadow-md"
        />

        <h1 className="text-5xl font-bold mt-6">Luciano Dagnillo</h1>

        <p className="mt-4 text-xl text-white-700 max-w-xl">
          <Typewriter
            words={[
              'MS ECE Student',
              'Passionate about intelligent systems',
              'Bridging software and hardware',
              'Always building something new...'
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      </motion.section>

      <motion.section
        id="about"
        className="min-h-[80vh] bg-gray-100 px-6 py-20 flex items-start justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Image */}
          <div className="grid grid-cols-2 gap-3 w-fit">
            {[
              '/images/candid1.jpg',
              '/images/candid2.jpg',
              '/images/candid3.jpg',
              '/images/candid4.jpg',
            ].map((src, idx) => (
              <motion.img
                key={src}
                src={src}
                alt={`Candid ${idx + 1}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-70 h-100 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Right Side: Bio + Skills */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
            <p>
              I&apos;m a Master&apos;s student in Electrical and Computer Engineering, 
              passionate about bridging software innovation with practical hardware applications. 
              My experience spans from embedded systems and robotics to semiconductor research 
              and machine learning projects, reflecting my commitment to exploring interdisciplinary 
              solutions. I enjoy turning theoretical concepts into tangible results, especially in areas 
              like renewable energy, smart systems, and electric vehicle technology.
            </p>

            {/* Skill Bars */}
            <div className="space-y-3">
              <SkillBar label="Python" width="79%" />
              <SkillBar label="C/C++" width="74%" />
              <SkillBar label="Embedded Systems" width="76%" />
              <SkillBar label="TensorFlow" width="69%" />
              <SkillBar label="Electrical Testing" width="86%" />
              <SkillBar label="Cross-Functional Collaboration" width="90%" />
              <SkillBar label="Curiosity" width="100%" />
            </div>

            {/* Icons */}
            <div>
              <h3 className="font-semibold mt-6 mb-2">Technologies I Use:</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-blue-700">
                <FaPython title="Python" />
                <FaMicrochip title="Embedded Systems" />
                <SiTensorflow title="TensorFlow" />
                <SiCplusplus title="C++" />
                <FaGithub title="GitHub" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">Projects</h2>
        <ul className="mt-6 space-y-4">
          <li>🎵 Music Visualizer with LED Matrix</li>
          <li>🧠 AI Face Tracking with TensorFlow</li>
          <li>☀️ Solar Drone for Remote Sensing</li>
        </ul>
      </motion.section>

      <motion.section
        id="resume"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">Resume</h2>
        <a 
          href="/Luciano_Dagnillo_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View My Resume
        </a>
      </motion.section>
    </main>
  );
}
