import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ITSkills from './categories/Database';
import WebSkills from './categories/Tools';

interface Skills {
  id: string;
  title: 'IT Skills' | 'Web Skills';
  content: React.ReactNode;
}

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  const SkillData: Skills[] = [
    { id: '1', title: 'IT Skills', content: <ITSkills /> },
    { id: '2', title: 'Web Skills', content: <WebSkills /> },
  ];

  return (
    <div id="skills" className=" bg-gray-950 py-4 sm:py-6 md:py-8 lg:py-10 px-2 overflow-hidden">
      <p className="text-center teko text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        TECHNICAL SKILLS
      </p>

      {/* Slide Tabs */}
      <ul
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
        className="relative mx-auto flex  w-full  bg-gray-950 p-1"
      >
        
        {SkillData.map((tab, index) => (
          <li
            key={index}
            ref={(el) => {(tabRefs.current[index] = el)}}
            onClick={() => setActiveTab(index)}
            onMouseEnter={() => {
              const ref = tabRefs.current[index];
              if (!ref) return;

              const { width } = ref.getBoundingClientRect();
              setPosition({
                left: ref.offsetLeft,
                width,
                opacity: 1,
              });
            }}
            className={`text-xs md:text-md lg:text-lg relative w-full z-10 cursor-pointer px-4 py-2  font-semibold  text-center ${
              activeTab === index ? 'text-gray-400' : 'text-gray-100'
            }`}
          >
            {tab.title}
          </li>
        ))}

        <motion.li
          animate={{ ...position }}
          className="absolute z-0 h-8 lg:h-11 rounded-full bg-gray-800"
        />
      </ul>

      {/* Tab Content */}
      <div className="mt-6 px-4 text-white">
        {SkillData[activeTab].content}
      </div>
    </div>
  );
};

export default Skills;
