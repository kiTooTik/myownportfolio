"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/reusable/logo/Logo";

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
      className="bg-gray-950/90 backdrop-blur flex justify-between items-center px-4 sm:px-6 md:px-8 fixed top-0 left-0 right-0 z-[10000] py-3"
    >
      <Logo />

      <div className="flex items-center justify-end gap-2 sm:gap-4">
        <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm sm:text-base font-semibold text-gray-300">
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
    </motion.nav>
  );
};

export default NavBar;
