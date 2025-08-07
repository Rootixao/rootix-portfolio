"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  Moon,
  Sun,
  Menu,
  X,
  Play,
  Code,
  Smartphone,
  Palette,
  Users,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const HeroSection = () => (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-300 opacity-20 text-sm font-mono animate-bounce">
          {"<div>"}
        </div>
        <div className="absolute top-40 right-20 text-purple-300 opacity-20 text-sm font-mono animate-bounce animation-delay-1000">
          {"function()"}
        </div>
        <div className="absolute bottom-40 left-20 text-pink-300 opacity-20 text-sm font-mono animate-bounce animation-delay-2000">
          {"useState()"}
        </div>
        <div className="absolute bottom-20 right-40 text-blue-300 opacity-20 text-sm font-mono animate-bounce animation-delay-3000">
          {"</>"}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Root For
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Software Solutions
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We deliver innovative digital solutions to empower businesses with
          cutting-edge technology and exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );

  const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );

  const ServicesSection = () => (
    <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We <span className="text-blue-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="Scalable websites built with Next.js, React, and modern tech stacks for optimal performance."
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Applications"
            description="Cross-platform mobile apps with stunning performance and intuitive user experiences."
          />
          <ServiceCard
            icon={Palette}
            title="UI/UX Design"
            description="Beautiful designs focused on clarity, simplicity, and exceptional user experience."
          />
          <ServiceCard
            icon={Users}
            title="Software Consulting"
            description="Strategic guidance and technical expertise to accelerate your digital transformation."
          />
        </div>
      </div>
    </section>
  );

  const ProjectCard = ({ title, description, image, demoVideo }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-24 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
              <Code className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        )}

        {demoVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <button
              onClick={() => setActiveVideo(demoVideo)}
              className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transform hover:scale-110 transition-all duration-300"
            >
              <Play className="w-6 h-6 text-gray-800 ml-1" />
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          View Details →
        </button>
      </div>
    </div>
  );

  const VideoModal = ({ videoId, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Demo Video Player</p>
              <p className="text-sm text-gray-400 mt-2">Video ID: {videoId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Recent <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI E-Commerce Platform"
            description="A powerful e-commerce system integrated with AI product recommendations, Stripe payments, and advanced analytics."
            demoVideo="ecommerce-demo"
          />
          <ProjectCard
            title="HR & Payroll System"
            description="Comprehensive internal dashboard for managing employee attendance, payrolls, leaves, and performance metrics."
            demoVideo="hr-demo"
          />
          <ProjectCard
            title="Real Estate CRM"
            description="Modern CRM solution for real estate agencies with property management, client tracking, and automated workflows."
          />
          <ProjectCard
            title="FinTech Mobile App"
            description="Secure mobile banking application with biometric authentication, investment tracking, and expense management."
            demoVideo="fintech-demo"
          />
          <ProjectCard
            title="Healthcare Dashboard"
            description="Patient management system with appointment scheduling, medical records, and telemedicine integration."
          />
          <ProjectCard
            title="Educational Platform"
            description="Interactive learning management system with video streaming, progress tracking, and collaborative tools."
            demoVideo="education-demo"
          />
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );

  const TeamMember = ({ name, role, avatar }) => (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        {avatar ||
          name
            .split(" ")
            .map((n) => n[0])
            .join("")}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
    </div>
  );

  const AboutSection = () => (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We <span className="text-blue-600">Are</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Root For Software Solutions is a team of passionate engineers,
            designers, and problem solvers. We craft reliable, scalable, and
            user-centered software products that solve real business challenges
            and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <TeamMember name="Sarah Chen" role="CEO & Full-Stack Developer" />
          <TeamMember name="Michael Rodriguez" role="CTO & System Architect" />
          <TeamMember name="Emily Johnson" role="UI/UX Design Lead" />
          <TeamMember name="David Kim" role="Mobile App Developer" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Have a Project in <span className="text-purple-600">Mind?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's work together to make it happen. Get in touch and let's
            discuss your next big idea.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h3>
            <div className="space-y-6"></div>

            {/* Contact Info & Map */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Tech Street, Innovation District
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      hello@rootforsoftware.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Map */}
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      {activeVideo && (
        <VideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
