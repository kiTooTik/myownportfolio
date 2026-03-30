import React from "react";
import {
  Azure,
  CSS3,
  Docker,
  ExpressJsDark,
  Firebase,
  Git,
  GitHubDark,
  GoogleCloud,
  HTML5,
  JavaScript,
  NodeJs,
  Render,
  React as ReactIcon,
  Supabase,
  TypeScript,
  VercelDark,
  Flutter,
} from "developer-icons";

type Item = {
  label: string;
  icon: React.ReactNode;
};

const WebSkills = () => {
  const webItems: Item[] = [
    { label: "HTML", icon: <HTML5 className="w-[56px] h-[56px]" /> },
    { label: "CSS", icon: <CSS3 className="w-[56px] h-[56px]" /> },
    { label: "JavaScript", icon: <JavaScript className="w-[56px] h-[56px]" /> },
    { label: "React", icon: <ReactIcon className="w-[56px] h-[56px]" /> },
    { label: "TypeScript", icon: <TypeScript className="w-[56px] h-[56px]" /> },
    { label: "Node.js", icon: <NodeJs className="w-[56px] h-[56px]" /> },
    { label: "Express", icon: <ExpressJsDark className="w-[56px] h-[56px]" /> },
    { label: "Flutter", icon: <Flutter className="w-[56px] h-[56px]" /> },
  ];

  const cloudItems: Item[] = [
    { label: "Firebase", icon: <Firebase className="w-[56px] h-[56px]" /> },
    { label: "Supabase", icon: <Supabase className="w-[56px] h-[56px]" /> },
    { label: "Google Cloud", icon: <GoogleCloud className="w-[56px] h-[56px]" /> },
    { label: "Azure", icon: <Azure className="w-[56px] h-[56px]" /> },
    { label: "Vercel", icon: <VercelDark className="w-[56px] h-[56px]" /> },
    { label: "Render", icon: <Render className="w-[56px] h-[56px]" /> },
    { label: "Git", icon: <Git className="w-[56px] h-[56px]" /> },
    { label: "GitHub", icon: <GitHubDark className="w-[56px] h-[56px]" /> },
    { label: "Docker", icon: <Docker className="w-[56px] h-[56px]" /> },
  ];

  return (
    <div className="w-full">
      <div className="space-y-8">
        <div>
          <p className="text-gray-200 font-bold text-lg mb-4">Web</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {webItems.map((item) => (
              <div
                key={item.label}
                className="bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-xl px-3 py-3 flex flex-col items-center gap-2 transition-colors"
              >
                <div className="h-[56px] flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[0.7rem] sm:text-xs text-center text-gray-300 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-200 font-bold text-lg mb-4">
            Cloud & DevOps
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cloudItems.map((item) => (
              <div
                key={item.label}
                className="bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-xl px-3 py-3 flex flex-col items-center gap-2 transition-colors"
              >
                <div className="h-[56px] flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[0.7rem] sm:text-xs text-center text-gray-300 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSkills;