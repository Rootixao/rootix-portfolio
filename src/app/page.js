"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Service from "@/components/sections/Service/Service";
import Projects from "@/components/sections/Projects/Projects";
import { useState } from "react";
import About from "@/components/sections/Aboout/About";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";
import VideoModal from "@/components/VideoModal/VideoModal";
import { useTranslation } from "react-i18next";

export default function page() {
  const { t } = useTranslation("common");
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <div>
      <Hero t={t} />
      <Service />
      <Projects setActiveVideo={setActiveVideo} />
      <About />
      <Contact />

      {activeVideo && (
        <VideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}
