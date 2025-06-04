'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaPython, FaLinkedin, FaGithub, FaMicrochip } from 'react-icons/fa';
import { SiTensorflow, SiCplusplus } from 'react-icons/si';
import SkillBar from '@/app/components/SkillBar';
import ProjectShowcase from '@/app/components/ProjectShowcase';
import PaperCard from '@/app/components/PaperCard';



export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const scrollLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
  ];

  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = resumeRef.current;
    if (!dialog) return;

    if (showResume && !dialog.open) {
      dialog.showModal();
    } else if (!showResume && dialog.open) {
      dialog.close();
    }
  }, [showResume]);

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
        <div className="mt-6 w-full max-w-5xl">
          <h3 className="text-2xl font-medium mb-8 text-center">Featured Builds</h3>

          <ProjectShowcase
            title="Music Visualizer with LED Matrix"
            description="This project converts real-time audio into colorful animations on a 10×10 WS2812B LED matrix. Built using an ESP32 microcontroller, the system captures microphone input and performs FFT-based frequency analysis to generate dynamic bar and wave visualizations. The visualizer runs on memory-constrained hardware and showcases embedded audio processing, precision timing, and multichannel LED control using the FastLED library. Future upgrades include Bluetooth/Wi-Fi app control and beat-synchronized pattern modulation, making it a great showcase of both low-level optimization and user-facing interactivity."
            video="/videos/led-vid.MOV"
            tags={['ESP32', 'WS2812B', 'Arduino', 'C++']}
            github="https://github.com/Luke-Dagnillo/LED_Matrix_Thingy"
          />

          <ProjectShowcase
            title="Perio-Dx Mobile App"
            description="Perio-Dx is a proof-of-concept mobile health app developed in collaboration with biomedical engineering students for a senior design project. The app allows users to input data from antigen-based saliva diagnostics to assess potential risks of kidney or heart disease. Built with Python’s Kivy framework and Firebase for real-time backend integration, Perio-Dx features data logging, graphical feedback, and cross-platform support. While not a production medical tool, it demonstrates rapid prototyping of clinical diagnostics, mobile GUI development, and backend integration for health tech."
            video="/videos/app-vid.MP4"
            tags={['Python', 'Kivy', 'Firebase', 'Mobile']}
            github="https://github.com/Luke-Dagnillo/Perio-dx-App"
            reverse
          />

          <ProjectShowcase
            title="Analog Audio Amplifier Circuit"
            description="Designed for a circuits course, this project involved building an analog amplifier using op-amps and discrete transistors to boost audio signals without distortion. The amplifier was simulated in SPICE to analyze frequency response and gain characteristics, then physically constructed and validated using a waveform generator and oscilloscope. It taught practical tradeoffs in signal integrity, component tolerance, and analog layout, offering hands-on experience with lab instrumentation and classic audio engineering principles."
            video="/videos/speaker-vid.MOV"
            tags={['Analog', 'SPICE', 'Circuit Design', 'Amplifier']}
          />

          <ProjectShowcase
            title="Solar Drone for Remote Sensing"
            description="This project involved retrofitting an old RC quadcopter with a solar charging solution to extend flight endurance in sunlight. After losing the original charger, the drone was repurposed with lightweight solar panels and onboard power management to trickle-charge its battery, serving as a testbed for off-grid UAV concepts. While the system remains RC-controlled, the project highlights creative problem-solving, renewable energy integration, and system-level engineering. It’s a strong example of sustainability-focused innovation applied to embedded systems."
            video="/videos/drone-vid.MOV"
            tags={['Drone', 'Sensors', 'Solar', 'Embedded']}
            reverse
          />
        </div>

        {/* 📄 Research & Technical Writing */}
        <div className="mt-12 w-full max-w-4xl">
          <h3 className="text-2xl font-medium mb-4">Research & Technical Writing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <PaperCard
              title="Challenges and Opportunities with Gate-All-Around Transistors"
              summary="Explores fabrication and reliability challenges of GAAFETs versus FinFETs and proposes material and design strategies for sub-3nm logic."
              file="/papers/Challenges_and_Opportunities_with_Gate_All_Around_Transistors.pdf"
            />
            <PaperCard
              title="Survey of Contamination in Language Model Benchmarks"
              summary="Investigates benchmark contamination in LLMs via TS-Guessing and Local Order Quiz, revealing memorization in high school math tasks."
              file="/papers/Machine_Learning_Project_2.pdf"
            />
            <PaperCard
              title="Analysis of Cache Compression via Clustering"
              summary="Implements Base-Delta-Immediate compression in ZSim and evaluates its impact on memory efficiency and runtime in simulated workloads."
              file="/papers/562FinalReport.pdf"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
      id="resume"
      className="min-h-[60vh] bg-gray-100 px-6 py-20 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Resume</h2>

      <p className="text-gray-700 max-w-xl mb-4">
        Click below to preview my resume in-browser, or download it as a PDF.
      </p>

      {/* Resume Modal Button */}
      <button
        onClick={() => setShowResume(true)}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Resume
      </button>

      {/* Download Link */}
      <a
        href="/Luciano_Dagnillo_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 text-blue-600 hover:underline"
      >
        Download Resume
      </a>

      {/* Social Icons */}
      <div className="flex gap-6 text-3xl text-blue-700 mt-6">
        <a href="https://www.linkedin.com/in/luciano-dagnillo-0a910a306/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-800 transition" />
        </a>
        <a href="https://github.com/Luke-Dagnillo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-800 transition" />
        </a>
      </div>

      {/* Modal View */}
      <dialog
        ref={resumeRef}
        className="backdrop:bg-black/50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full rounded-lg p-0"
        onClose={() => setShowResume(false)}
        open={showResume}
      >
        <div className="flex justify-between items-center p-4 border-b bg-gray-100">
          <span className="font-semibold">Luciano Dagnillo – Resume</span>
          <button onClick={() => setShowResume(false)} className="text-sm text-gray-600 hover:text-black">
            Close ✕
          </button>
        </div>
        <iframe
          src="/papers/DAGNILLO_LUKE_resume.pdf"
          className="w-full h-[75vh]"
        ></iframe>
      </dialog>
    </motion.section>
    </main>
  );
}
