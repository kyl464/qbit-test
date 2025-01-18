import React from "react";

const Logo = ({ width = 150, height = 50, className = "" }) => {
  return (
    <div
      className={`logo ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        color: "#8B4513",
      }}
    >
      <svg width={width} height={height} viewBox="0 0 500 500">
        <rect width="500" height="500" rx="50" fill="#8B4513" />
        <path d="M100 350 Q250 400, 400 350 L400 450 Q250 500, 100 450 Z" fill="#D2691E" />
        <path d="M150 200 L180 230 Q200 250, 220 230 L250 200" stroke="#F4A460" stroke-width="20" fill="none" stroke-linecap="round" />
        <circle cx="300" cy="180" r="40" fill="#CD853F" />
        <circle cx="340" cy="220" r="20" fill="#DEB887" />
        <text x="250" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white">
          DW
        </text>
      </svg>
      <span style={{ marginLeft: "10px", fontSize: "1.5rem", color: "white" }}>Dapur Warisan</span>
    </div>
  );
};

export default Logo;
