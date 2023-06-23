import React, { useEffect } from "react";
import "./WifiIcon.css";

const WifiIcon = () => {
  useEffect(() => {
    const icon = document.getElementById("wifi-icon");
    icon.classList.add("animate-wifi");
  }, []);

  return (
    <svg
      className="w-[45px] h-[40px] md:w-[55px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      id="wifi-icon"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12" y2="20" />
    </svg>
  );
};

export default WifiIcon;
