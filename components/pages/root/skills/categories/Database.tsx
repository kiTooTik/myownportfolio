import React from "react";
import { Jira } from "developer-icons";
import {
  FaClipboardList,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
  FaVideo,
} from "react-icons/fa";

type Item = {
  label: string;
  icon: React.ReactNode;
};

const ITSkills = () => {
  const items: Item[] = [
    { label: "IT Support & Troubleshooting", icon: <FaTools className="text-gray-300 text-4xl" /> },
    { label: "System Administration", icon: <FaTools className="text-gray-300 text-4xl" /> },
    { label: "IT Service Management", icon: <FaClipboardList className="text-gray-300 text-4xl" /> },
    { label: "Asset & Inventory Management", icon: <FaClipboardList className="text-gray-300 text-4xl" /> },
    { label: "Network & System Monitoring", icon: <FaNetworkWired className="text-gray-300 text-4xl" /> },
    { label: "Remote System Administration", icon: <FaNetworkWired className="text-gray-300 text-4xl" /> },
    { label: "Endpoint Security Management", icon: <FaShieldAlt className="text-gray-300 text-4xl" /> },
    { label: "Patch & Update Management", icon: <FaShieldAlt className="text-gray-300 text-4xl" /> },
    { label: "IT & Systems", icon: <FaTools className="text-gray-300 text-4xl" /> },

    // IT tools (developer-icons has Jira; other vendors are represented with generic IT icons).
    { label: "Jira", icon: <Jira className="w-[56px] h-[56px] text-gray-300" /> },
    { label: "NinjaOne", icon: <FaNetworkWired className="text-gray-300 text-4xl" /> },
    { label: "PRTG Network Monitor", icon: <FaNetworkWired className="text-gray-300 text-4xl" /> },
    { label: "Snipe-IT", icon: <FaClipboardList className="text-gray-300 text-4xl" /> },
    { label: "Bitdefender GravityZone", icon: <FaShieldAlt className="text-gray-300 text-4xl" /> },
    { label: "Hikvision iVMS-4200", icon: <FaVideo className="text-gray-300 text-4xl" /> },
    { label: "Ubiquiti UniFi", icon: <FaNetworkWired className="text-gray-300 text-4xl" /> },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
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
  );
};

export default ITSkills;