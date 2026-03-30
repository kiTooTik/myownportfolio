"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/reusable/logo/Logo";
import { Contact } from "@/components/pages/root/contact/Contact";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(() => ["home", "about", "projects", "skills"], []);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, height } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && top + height >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-950/90 backdrop-blur flex items-center px-4 sm:px-6 md:px-8 sticky top-0 z-[10000] py-3 relative"
    >
      <div className="absolute left-4 sm:left-6 md:left-8">
        <Logo />
      </div>

      <div className="flex items-center justify-center w-full">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base font-semibold text-gray-300">
          {sections.map((section) => (
            <li key={section}>
              <button
                type="button"
                onClick={() => scrollToSection(section)}
                className={`capitalize px-2 py-1 rounded-lg transition-colors hover:text-white hover:bg-white/10 ${
                  activeSection === section ? "text-white bg-white/10" : ""
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden sm:flex items-center gap-2 text-gray-300 font-semibold absolute right-4 sm:right-6 md:right-8">
        <span className="text-sm sm:text-base">Contact me:</span>
        <Contact />
      </div>
    </motion.nav>
  );
};

export default NavBar;
