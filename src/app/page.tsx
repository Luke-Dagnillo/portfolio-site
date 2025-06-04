'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';


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
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
        <p className="mt-4 max-w-2xl text-center text-gray-900">
          I&apos;m a Master&apos;s student in Electrical and Computer Engineering focused on robotics, embedded systems, and AI. 
          I love building real-world tech that blends hardware and software.
        </p>
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
